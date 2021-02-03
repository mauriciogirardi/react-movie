import React, { useCallback, useEffect, useState } from 'react';
import { FaStar, FaArrowLeft } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import { AiOutlinePlayCircle } from 'react-icons/ai';

import MoviePlayerModal from 'components/MoviePlayerModal';
import Footer from 'components/Footer';
import Casts from 'components/Casts';
import CardMovie from 'components/CardMovie';

import {
  fetchMovieDetail,
  fetchMovieVideo,
  fetchCasts,
  fetchSimilarMovie,
} from 'service/api';
import formattedCurrency from 'utils/formattedCurrency';
import {
  Container,
  BackgroundPoster,
  BackgroundModal,
  DetailGenre,
  GenreContent,
  CardInfo,
  InfoMovie,
} from './styles';

interface GenreProps {
  id: number;
  name: string;
}

interface DetailProps {
  backdrop_path: string;
  overview: string;
  title: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
  };
  vote_average: number;
  genres: GenreProps[];
  release_date: string;
  runtime: number;
  budget: number;
  homepage: string;
}

interface VideoProps {
  key: string;
  type: string;
}

const MovieDetail: React.FC = () => {
  const [detail, setDetail] = useState<DetailProps>({} as DetailProps);
  const [video, setVideo] = useState<VideoProps>({} as VideoProps);
  const [casts, setCasts] = useState([]);
  const [similarMovie, setSimilarMovie] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const id = useParams();
  const posterUrl = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    (async () => {
      const paramsId = Object.values(id)[0];

      setDetail(await fetchMovieDetail(Number(paramsId)));
      setVideo(await fetchMovieVideo(Number(paramsId)));
      setCasts(await fetchCasts(Number(paramsId)));
      setSimilarMovie(await fetchSimilarMovie(Number(paramsId)));
    })();
  }, [id]);

  const formattedDate =
    detail.release_date &&
    detail.release_date.split('-').reverse().join(',').replace(/,/g, '/');

  const handlePlayModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      {isOpen && <BackgroundModal />}

      <Container>
        <Link to="/">
          <FaArrowLeft />
        </Link>
        <BackgroundPoster>
          <img src={posterUrl + detail.backdrop_path} alt={detail.title} />
          <h1>{detail.title}</h1>
          <AiOutlinePlayCircle
            color="#fea03f"
            onClick={() => setIsOpen(true)}
          />
        </BackgroundPoster>

        {isOpen && (
          <MoviePlayerModal
            video={video.key}
            isOpen={handlePlayModal}
            title={detail.title}
          />
        )}
        <DetailGenre>
          <h2>Genero</h2>
          <GenreContent>
            {detail.genres &&
              detail.genres.map(genre => <p key={genre.id}>{genre.name}</p>)}
          </GenreContent>

          {Array.from({ length: detail.vote_average }).map((_, i) => (
            <FaStar key={i} size={18} color="#ff9900" />
          ))}

          <h2>Descrição</h2>
          <p>{detail.overview}</p>

          <InfoMovie>
            <CardInfo>
              <h3>Data de lançamento</h3>
              <time>{formattedDate}</time>
            </CardInfo>
            <CardInfo>
              <h3>tempo de execução</h3>
              <time>{detail.runtime}</time>
            </CardInfo>
            <CardInfo>
              <h3>Gasto</h3>
              <p>
                {detail.budget === 0
                  ? 'Não informado'
                  : formattedCurrency(detail.budget)}
              </p>
            </CardInfo>

            <CardInfo>
              <h3>Homepage</h3>
              <a
                href={detail.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                Filme
              </a>
            </CardInfo>
          </InfoMovie>
        </DetailGenre>

        <Casts data={casts} title="elenco" />
        <CardMovie data={similarMovie} title="filmes semelhantes" />
        <Footer />
      </Container>
    </>
  );
};

export default MovieDetail;

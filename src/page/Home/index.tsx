import React, { useCallback, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Carousel, { settings } from 'components/Carousel';
import Footer from 'components/Footer';
import TrendingPerson from 'components/TrendingPerson';
import CardMovie from 'components/CardMovie';

import {
  fetchGenre,
  fetchMovieByGenre,
  fetchMovies,
  fetchPersons,
  fetchTopRatedMovie,
} from 'service/api';

import { Container, Genres } from './styles';

interface NowPlayingProps {
  id: number;
  backPoster: string;
  popularity: number;
  title: string;
  poster: string;
  overview: string;
  rating: number;
}

interface GenresProps {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const [nowPlaying, setNowPlaying] = useState<NowPlayingProps[]>([]);
  const [genres, setGenres] = useState<GenresProps[]>([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [trendingPersons, setTrendingPersons] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    (async () => {
      setNowPlaying(await fetchMovies());
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre(28));
      setTrendingPersons(await fetchPersons());
      setTopRated(await fetchTopRatedMovie());
    })();
  }, []);

  const handleGenreClick = useCallback(async (genreId: number) => {
    setMovieByGenre(await fetchMovieByGenre(genreId));
  }, []);

  return (
    <>
      <Container>
        <Slider {...settings}>
          {nowPlaying.map(movie => (
            <Carousel
              key={movie.id}
              image={movie.backPoster}
              title={movie.title}
            />
          ))}
        </Slider>

        <Genres>
          {genres.map(genre => (
            <ul key={genre.id}>
              <li>
                <button
                  type="button"
                  onClick={() => handleGenreClick(genre.id)}
                >
                  {genre.name}
                </button>
              </li>
            </ul>
          ))}
        </Genres>

        <CardMovie data={movieByGenre} />

        <TrendingPerson
          data={trendingPersons}
          title="tendências de pessoas nesta semana"
          trending
        />

        <CardMovie data={topRated} title="filmes com melhor classificação" />

        <Footer />
      </Container>
    </>
  );
};

export default Home;

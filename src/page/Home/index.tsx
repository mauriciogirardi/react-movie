import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Carousel, { settings } from 'components/Carousel';
import Footer from 'components/Footer';

import {
  fetchGenre,
  fetchMovieByGenre,
  fetchMovies,
  fetchPersons,
  fetchTopRatedMovie,
} from 'service/api';

import {
  Container,
  Genres,
  MovieByGenre,
  MovieByGenreCard,
  MovieByGenreCardContent,
  TrendingPersons,
  TrendingPersonsCard,
  TrendingPersonsContent,
  TopRated,
  TopRatedContainer,
  TopRatedCard,
  TopRatedCardContent,
} from './styles';

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

interface PersonProps {
  id: number;
  name: string;
  popularity: number;
  profileImg: string;
  known: string;
}

const Home: React.FC = () => {
  const [nowPlaying, setNowPlaying] = useState<NowPlayingProps[]>([]);
  const [genres, setGenres] = useState<GenresProps[]>([]);
  const [movieByGenre, setMovieByGenre] = useState<NowPlayingProps[]>([]);
  const [trendingPersons, setTrendingPersons] = useState<PersonProps[]>([]);
  const [topRated, setTopRated] = useState<NowPlayingProps[]>([]);

  useEffect(() => {
    (async () => {
      setNowPlaying(await fetchMovies());
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre(28));
      setTrendingPersons(await fetchPersons());
      setTopRated(await fetchTopRatedMovie());
    })();
  }, []);

  return (
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
              <button type="button">{genre.name}</button>
            </li>
          </ul>
        ))}
      </Genres>

      <MovieByGenre>
        {movieByGenre.slice(0, 4).map(item => (
          <MovieByGenreCard key={item.id}>
            <Link to={`/movie/${item.id}`}>
              <img src={item.poster} alt={item.title} />
              <MovieByGenreCardContent>
                <h4>{item.title}</h4>
                <p>{`Avaliação: ${item.rating}`}</p>
                {Array.from({ length: item.rating }).map(start => (
                  <FaStar size={18} color="#ff9900" />
                ))}
              </MovieByGenreCardContent>
            </Link>
          </MovieByGenreCard>
        ))}
      </MovieByGenre>

      <TrendingPersons>
        <h1>tendências de pessoas nesta semana</h1>
        <TrendingPersonsCard>
          {trendingPersons.slice(0, 4).map(person => (
            <TrendingPersonsContent key={person.id}>
              <img src={person.profileImg} alt={person.name} />
              <h2>{person.name}</h2>
              <span>{`Trending for ${person.known}`}</span>
            </TrendingPersonsContent>
          ))}
        </TrendingPersonsCard>
      </TrendingPersons>

      <TopRated>
        <h1>filmes com melhor classificação</h1>
        <TopRatedContainer>
          {topRated.slice(0, 4).map(item => (
            <TopRatedCard key={item.id}>
              <Link to={`/movie/${item.id}`}>
                <img src={item.poster} alt={item.title} />
                <TopRatedCardContent>
                  <h4>{item.title}</h4>
                  <p>{`Avaliação: ${item.rating}`}</p>
                  {Array.from({ length: item.rating }).map(start => (
                    <FaStar size={18} color="#ff9900" />
                  ))}
                </TopRatedCardContent>
              </Link>
            </TopRatedCard>
          ))}
        </TopRatedContainer>
      </TopRated>

      <Footer />
    </Container>
  );
};

export default Home;

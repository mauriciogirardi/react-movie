import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Movie, MovieCard, MovieCardContent, MovieContainer } from './styles';

interface NowPlayingProps {
  id: number;
  backPoster: string;
  popularity: number;
  title: string;
  poster: string;
  overview: string;
  rating: number;
}

interface CardMovieProps {
  data: NowPlayingProps[];
  title?: string;
}

const CardMovie: React.FC<CardMovieProps> = ({ data, title }) => {
  return (
    <Movie>
      <h1>{title}</h1>
      <MovieContainer>
        {data.slice(0, 4).map(item => (
          <MovieCard key={item.id}>
            <Link to={`/movie/${item.id}`}>
              <img src={item.poster} alt={item.title} />
              <MovieCardContent>
                <h4>{item.title}</h4>
                {item.rating && <p>{`Avaliação: ${item.rating}`}</p>}
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} size={18} color="#ff9900" />
                ))}
              </MovieCardContent>
            </Link>
          </MovieCard>
        ))}
      </MovieContainer>
    </Movie>
  );
};

export default CardMovie;

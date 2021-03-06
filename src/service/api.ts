import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing`;
const topRatedUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;

interface PosterUrlProps {
  id: number;
  backPoster: string;
  popularity: number;
  title: string;
  poster: string;
  overview: string;
  rating: number;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
}

interface GenreUrlProps {
  id: number;
  name: string;
}

interface PersonProps {
  id: number;
  name: string;
  popularity: number;
  profileImg: string;
  profile_path: string;
  known: string;
  known_for_department: string;
}

interface CastProps {
  cast_id: number;
  profile_path: string;
  character: string;
  name: string;
  img: string;
}

export const fetchMovies = async () => {
  try {
    const { data } = await axios.get(nowPlayingUrl, {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
        page: 1,
      },
    });

    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedDate = data.results.map((m: PosterUrlProps) => ({
      id: m.id,
      backPoster: posterUrl + m.backdrop_path,
      popularity: m.popularity,
      title: m.title,
      poster: posterUrl + m.poster_path,
      overview: m.overview,
      rating: m.vote_average,
    }));

    return modifiedDate;
  } catch (err) {
    console.log('fetchMovies', err);
  }
};

export const fetchGenre = async () => {
  try {
    const { data } = await axios.get(genreUrl, {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
        page: 1,
      },
    });

    const modifiedDate = data.genres.map((g: GenreUrlProps) => ({
      id: g.id,
      name: g.name,
    }));

    return modifiedDate;
  } catch (err) {
    console.log('fetchGenre', err);
  }
};

export const fetchMovieByGenre = async (genre_id: number | string) => {
  try {
    const { data } = await axios.get(moviesUrl, {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
        page: 1,
        with_genres: genre_id,
      },
    });

    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedDate = data.results.map((m: PosterUrlProps) => ({
      id: m.id,
      backPoster: posterUrl + m.backdrop_path,
      popularity: m.popularity,
      title: m.title,
      poster: posterUrl + m.poster_path,
      overview: m.overview,
      rating: m.vote_average,
    }));

    return modifiedDate;
  } catch (err) {
    console.log('fetchMovieByGenre', err);
  }
};

export const fetchPersons = async () => {
  try {
    const { data } = await axios.get(personUrl, {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
      },
    });

    const profileUrl = 'https://image.tmdb.org/t/p/w200';
    const modifiedDate = data.results.map((p: PersonProps) => ({
      id: p.id,
      name: p.name,
      popularity: p.popularity,
      profileImg: profileUrl + p.profile_path,
      known: p.known_for_department,
    }));

    return modifiedDate;
  } catch (err) {
    console.log('fetchPersons', err);
  }
};

export const fetchTopRatedMovie = async () => {
  try {
    const { data } = await axios.get(topRatedUrl, {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
        page: 1,
      },
    });

    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedDate = data.results.map((m: PosterUrlProps) => ({
      id: m.id,
      backPoster: posterUrl + m.backdrop_path,
      popularity: m.popularity,
      title: m.title,
      poster: posterUrl + m.poster_path,
      overview: m.overview,
      rating: m.vote_average,
    }));

    return modifiedDate;
  } catch (err) {
    console.log('fetchPersons', err);
  }
};

export const fetchMovieDetail = async (id: number) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}`, {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
      },
    });

    return data;
  } catch (err) {
    console.log('fetchMovieDetail', err);
  }
};

export const fetchMovieVideo = async (id: number) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
      params: {
        api_key: apiKey,
      },
    });

    return data.results[0];
  } catch (err) {
    console.log('fetchMovieVideo', err);
  }
};

export const fetchCasts = async (id: number) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/credits`, {
      params: {
        api_key: apiKey,
      },
    });

    const posterUrl = 'https://image.tmdb.org/t/p/w200';
    const modifiedDate = data.cast.map((c: CastProps) => ({
      id: c.cast_id,
      character: c.character,
      name: c.name,
      img: posterUrl + c.profile_path,
    }));

    return modifiedDate;
  } catch (err) {
    console.log('fetchCasts', err);
  }
};

export const fetchSimilarMovie = async (id: number) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/similar`, {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
      },
    });

    const posterUrl = 'https://image.tmdb.org/t/p/original';
    const modifiedDate = data.results.map((m: PosterUrlProps) => ({
      id: m.id,
      backPoster: posterUrl + m.backdrop_path,
      popularity: m.popularity,
      title: m.title,
      poster: posterUrl + m.poster_path,
      overview: m.overview,
      rating: m.vote_average,
    }));

    return modifiedDate;
  } catch (err) {
    console.log('fetchSimilarMovie', err);
  }
};

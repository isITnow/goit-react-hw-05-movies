import axios from 'axios';

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = 'd70849b39c7b399ded2dffef6ee1baa4';

const filmApi = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  params: {
    key: '29319280-d70849b39c7b399ded2dffef6ee1baa4',
  },
});

////// TRENDING //////

const fetchFilmTrending = async () => {
  //   const params = {
  //     media_type: 'movie',
  //     time_window: 'day',
  //   };

  //   const response = filmApi.get('/', { params });

  const response = axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );

  return response;
};

////// QUERY //////

const fetchFilmByQuery = async (query, page) => {
  const response = axios.get(
    `${BASE_URL}/search/movie?&language=en-U&include_adult=true&api_key=${API_KEY}&page=${page}&query=${query}`
  );

  return response;
};

////// ID //////

const fetchFilmByID = async movieId => {
  const response = axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return response;
};

////// CAST //////

const fetchFilmCast = async movieId => {
  const response = axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response;
};

////// REVIEWS //////

const fetchFilmReviews = async movieId => {
  const response = axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response;
};

export const API = {
  fetchFilmReviews,
  fetchFilmCast,
  fetchFilmByID,
  fetchFilmByQuery,
  fetchFilmTrending,
};

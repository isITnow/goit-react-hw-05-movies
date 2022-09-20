import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from '../pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} />
    </BrowserRouter>
  );
};

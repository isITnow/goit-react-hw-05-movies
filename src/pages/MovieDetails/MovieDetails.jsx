import { Outlet, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from 'services/api';
import MovieInfo from 'components/MovieInfo';
import Container from 'components/Container';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState({});
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    API.fetchFilmByID(movieId)
      .then(({ data }) => {
        setFilm(data);
        setStatus('success');
      })
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <main>
      <Container>
        {status === 'success' && <MovieInfo film={film} />}
        <nav>
          <p>Additional information</p>

          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </Container>
    </main>
  );
};

export default MovieDetails;

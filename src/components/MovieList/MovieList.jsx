import { Link, useLocation } from 'react-router-dom';
import s from '../MovieList/movieList.module.css';
import PropTypes from 'prop-types';

const MovieList = ({ films }) => {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {films.map(({ id, title }) => (
        <li key={id}>
          <Link
            to={`/movies/${id}`}
            state={{ from: location }}
            className={s.item}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

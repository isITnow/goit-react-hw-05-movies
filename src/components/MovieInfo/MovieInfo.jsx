import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from '../MovieInfo/movieInfo.module.css';

const MovieInfo = ({ film }) => {
  const location = useLocation();

  const { title, genres, overview, poster_path, vote_average, release_date } =
    film;

  const filmTitle = `${title} (${release_date.slice(0, 4)})`;
  const userScore = Math.floor(vote_average * 10);
  const imgPath = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const pathBack = location.state?.from || `/`;

  return (
    <>
      <Link to={pathBack} className={s.btn}>
        &#8592; Go back
      </Link>
      <div className={s.card}>
        <img width="300" src={imgPath} alt={title} />
        <div className={s.info}>
          <h2>{filmTitle}</h2>
          <p>{`User Score: ${userScore}%`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres.length > 0
              ? genres.map(item => item.name).join(', ')
              : 'no info'}
          </p>
        </div>
      </div>

      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link
              to="cast"
              state={location.state?.from ? location.state : null}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to="reviews"
              state={location.state?.from ? location.state : null}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieInfo;

MovieInfo.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

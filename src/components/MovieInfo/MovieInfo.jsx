// import PropTypes from 'prop-types';
// import { Link, NavLink } from 'react-router-dom';

import s from '../MovieInfo/movieInfo.module.css';

const MovieInfo = ({ film }) => {
  const { title, genres, overview, poster_path, vote_average, release_date } =
    film;

  const filmTitle = `${title} (${release_date.slice(0, 4)})`;
  const userScore = Math.floor(vote_average * 10);
  const imgPath = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
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
  );
};

export default MovieInfo;

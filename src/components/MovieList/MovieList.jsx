import { Link } from 'react-router-dom';
const MovieList = ({ films }) => {
  return (
    <ul>
      {films.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

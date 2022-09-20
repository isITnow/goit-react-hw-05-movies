import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API } from 'services/api';
import { toast } from 'react-toastify';

const Cast = () => {
  const { movieId } = useParams();

  const [castInfo, setCastInfo] = useState([]);
  useEffect(() => {
    API.fetchFilmCast(movieId)
      .then(({ data }) => {
        if (!data.cast.length) {
          toast.warn('No cast info');
          return;
        }
        setCastInfo(data.cast);
      })
      .catch(error => console.log(error.message));
  }, [movieId]);

  if (!castInfo.length) {
    return;
  }

  return (
    <>
      <h3>Cast</h3>
      <ul>
        {castInfo.map(({ character, id, original_name, profile_path }) => (
          <li key={id}>
            {profile_path && (
              <img
                width="120"
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={original_name}
              />
            )}
            <p>{original_name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;

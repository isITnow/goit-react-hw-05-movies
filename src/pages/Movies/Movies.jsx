import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { API } from 'services/api';
import MovieList from 'components/MovieList';
import SearchForm from 'components/SearchForm';
import Container from 'components/Container';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  const [films, setFilms] = useState([]);
  // const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!search) {
      return;
    }
    // setStatus('pending');
    API.fetchFilmByQuery(search)
      .then(({ data }) => {
        if (!data.results.length) {
          setFilms([]);
          toast.warn(`No results matching "${search}"`);
          return;
        }
        setFilms(data.results);
      })
      .catch(error => console.log(error.message))
      .finally(() => {
        // setStatus('resolved');
      });
  }, [search]);

  return (
    <Container>
      <SearchForm />
      {films.length > 0 && <MovieList films={films} />}
    </Container>
  );
};

export default Movies;

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { API } from 'services/api';
import { toast } from 'react-toastify';

import MovieList from 'components/MovieList';
import SearchForm from 'components/SearchForm';
import Container from 'components/Container';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (!search) {
      return;
    }
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
      .finally(() => {});
  }, [search]);

  return (
    <Container>
      <SearchForm />
      {films.length > 0 && <MovieList films={films} />}
    </Container>
  );
};

export default Movies;

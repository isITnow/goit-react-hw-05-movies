import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { API } from 'services/api';
import MovieList from 'components/MovieList';
import SearchForm from 'components/SearchForm';
import Container from 'components/Container';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState('');
  // const [status, setStatus] = useState('idle');

  const handleSubmit = query => setQuery(query);

  useEffect(() => {
    const searchRequest = query.trim().toLocaleLowerCase();
    console.log(searchRequest);
    if (!query) {
      return;
    }
    // setStatus('pending');
    API.fetchFilmByQuery(searchRequest)
      .then(({ data }) => {
        if (!data.results.length) {
          setFilms([]);
          toast.warn(`No results matching "${query}"`);
          return;
        }
        setFilms(data.results);
      })
      .catch(error => console.log(error.message))
      .finally(() => {
        // setStatus('resolved');
      });
  }, [query]);

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit} />
      {films.length > 0 && <MovieList films={films} />}
    </Container>
  );
};

export default Movies;

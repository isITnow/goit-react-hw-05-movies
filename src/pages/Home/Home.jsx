import { useState, useEffect } from 'react';
import { API } from 'services/api';
import { MovieList } from 'components/MovieList';
import Container from 'components/Container';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    API.fetchFilmTrending()
      .then(({ data }) => setTrendingFilms(data.results))
      .catch(error => console.log(error.message));
  }, []);

  return (
    <main>
      <Container>
        <h1>Trending today</h1>
        {trendingFilms.length && <MovieList films={trendingFilms} />}
      </Container>
    </main>
  );
};

export default Home;

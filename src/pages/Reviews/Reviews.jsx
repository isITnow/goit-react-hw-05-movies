import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API } from 'services/api';
import { toast } from 'react-toastify';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.fetchFilmReviews(movieId)
      .then(({ data }) => {
        if (!data.results.length) {
          toast.warn('No reviews');
          return;
        }
        setReviews(data.results);
      })

      .catch(error => console.log(error.message));
  }, [movieId]);

  if (!reviews.length) {
    return;
  }

  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(({ author, id, content }) => (
          <li key={id}>
            <p>{author ? author : 'no name'}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;

import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { toast } from 'react-toastify';
import s from '../SearchForm/saerchForm.module.css';

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParams = useMemo(() => {
    return [...searchParams].reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
  }, [searchParams]);

  const [query, setQuery] = useState(queryParams.search ?? '');

  const handleInputChange = evt => {
    const { value } = evt.target;
    setQuery(value);
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    if (!query.trim()) {
      toast.error('Please, enter your request');
      return;
    }
    setSearchParams(prev => {
      return { ...queryParams, search: query };
    });
  };

  return (
    <form className={s.form} onSubmit={handleFormSubmit}>
      <input
        name="film"
        type="text"
        placeholder="Let's try..."
        className={s.input}
        onChange={handleInputChange}
        value={query}
      />
      <button type="submit" className={s.btn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;

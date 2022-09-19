// import { toast } from 'react-toastify';
import s from '../SearchForm/saerchForm.module.css';
import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = evt => {
    const { value } = evt.target;
    setQuery(value);
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    // if (!query.trim()) {
    //   toast.error('Please, enter your request');
    //   return;
    // }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form className={s.form} onSubmit={handleFormSubmit}>
      <input
        name="film"
        type="text"
        placeholder="Пиши давай"
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

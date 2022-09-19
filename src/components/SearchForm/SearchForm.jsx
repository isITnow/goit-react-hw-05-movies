import s from '../SearchForm/saerchForm.module.css';

const SearchForm = () => {
  return (
    <form className={s.form}>
      <input name="film" placeholder="Пиши давай" className={s.input} />
      <button type="submit" className={s.btn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;

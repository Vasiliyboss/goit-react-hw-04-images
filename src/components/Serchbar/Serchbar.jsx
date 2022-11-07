import { useState } from 'react';
import css from './Serchbar.module.css';
import PropTypes from 'prop-types';

export function Serchbar({ onSubmit }) {
  const [name, setName] = useState('');

  const handleChangeInput = e => {
    setName(e.currentTarget.value.toLowerCase());
  };
  const handleFormSubmit = e => {
    e.preventDefault();

    if (name.trim() === '') {
      alert('Введіть слово');
      return;
    }
    onSubmit(name);
    setName('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleFormSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          value={name}
          onChange={handleChangeInput}
          className={css.SearchFormInput}
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Serchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

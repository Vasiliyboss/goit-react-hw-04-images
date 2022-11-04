import React from 'react';
import css from './Serchbar.module.css';
import PropTypes from 'prop-types';
export class Serchbar extends React.Component {
  state = {
    name: '',
  };
  handleChangeInput = e => {
    this.setState({ name: e.currentTarget.value.toLowerCase() });
  };
  handleFormSubmit = e => {
    e.preventDefault();

    if (this.state.name.trim() === '') {
      alert('Введіть слово');
      return;
    }
    this.props.onSubmit(this.state.name);
    // this.setState({ name: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleFormSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            value={this.state.name}
            onChange={this.handleChangeInput}
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
}

Serchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

import { useState } from 'react';
import PropTypes from 'prop-types';
import 'styles/styles.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onSubmitData = event => {
    event.preventDefault();
    onSubmit(query);

    if (query.trim() === '') {
      alert('Please enter your request');
      return;
    }
  };

  const onInputChange = event => {
    setQuery(event.target.value);
    console.log(event.target.value);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmitData}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onInputChange}
          value={query}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

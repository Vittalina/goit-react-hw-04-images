import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import 'styles/styles.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  onSubmitData = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);

    if (this.state.query.trim() === '') {
      alert('Please enter your request');
      return;
    }

    this.setState({ query: '' });
  };

  onInputChange = event => {
    this.setState({ query: event.target.value.toLowerCase() });
    console.log(event.target.value);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmitData}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onInputChange}
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

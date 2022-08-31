import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button type="button" className="Button" onClick={onClick}>
      {' '}
      Load more
    </button>
  );
};

Button.propType = {
  onClick: PropTypes.func.isRequired,
};
export default Button;

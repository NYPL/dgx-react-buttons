// Import React Libraries
import React from 'react';
import PropTypes from 'prop-types';

const PaginationButton = (props) => {
  const dotElements = [];
  // Add loading class and the loading animation if it is loading now
  const isLoading = props.isLoading ? 'loading' : '';
  let i;

  // Generate the dots for the pagination button.
  // The number of the dots is determinated by the props.
  for (i = 0; i < props.dots; i++) {
    dotElements.push(
      <span
        className={`${props.className}-dotRow-dot ${isLoading}`}
        key={i}
      >
      </span>
    );
  }

  return (
    <button
      className={`${props.className}`}
      onClick={props.onClick}
    >
      <span
        className={`${props.className}-dotRow`}
      >
        {dotElements}
        <span
          className={`${props.className}-dotRow-number`}
        >
          {props.label}
        </span>
      </span>
    </button>
  );
};

PaginationButton.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  lang: PropTypes.string,
  isLoading: PropTypes.bool,
  dots: PropTypes.number,
  onClick: PropTypes.func,
  style: PropTypes.object,
  dotStyle: PropTypes.object,
};

PaginationButton.defaultProps = {
  className: 'paginationButton',
  name: 'pagination button',
  label: 'Pagination Button',
  lang: 'en',
  dots: 3,
};

// Export the component
export default PaginationButton;

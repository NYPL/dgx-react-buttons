// Import React Libraries
import React from 'react';

// Misc
import cx from 'classnames';

class PaginationButton extends React.Component {
  // Constructor used in ES6
  constructor(props) {
    super(props);
  }

  render() {
    const dotElements = [],
      // Add loading class and the loading animation if it is loading now
      isLoading = cx({ loading: this.props.isLoading });
    let i;

    // Generate the dots for the pagination button.
    // The number of the dots is determinated by the props.
    for (i = 0; i < this.props.dots; i++) {
      dotElements.push(
        <li id={`${this.props.id}__dot-row__element_${i}`}
          className={`${this.props.className}__dot-row__element ${isLoading}`}
          key={i}>
        </li>
      );
    }

    return (
      <div id={this.props.id}
        className={`${this.props.className}`}
        onClick={this.props.onClick}>
        <ul
          id={`${this.props.id}__dot-row`}
          className={`${this.props.className}__dot-row`}>
          {dotElements}
          <li
            id={`${this.props.id}__dot-row__number`}
            className={`${this.props.className}__dot-row__number`}>
            {this.props.label}
          </li>
        </ul>
      </div>
    );
  }
}

PaginationButton.propTypes = {
  id: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  lang: React.PropTypes.string,
  isLoading: React.PropTypes.bool.isRequired,
  dots: React.PropTypes.number,
  onClick: React.PropTypes.func,
};

PaginationButton.defaultProps = {
  id: 'PaginationButton',
  className: 'pagination-button',
  name: 'pagination button',
  label: 'Pagination Button',
  lang: 'en',
  dots: 3,
};

// Export the component
export default PaginationButton;

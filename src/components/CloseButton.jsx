import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

class CloseButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        height={10}
        width={10}
      >
        <polygon points="50 5.84 44.16 0 25 19.16 5.84 0 0 5.84 19.16 25 0 44.16 5.84 50 25 30.84 44.16 50 50 44.16 30.84 25 50 5.84"/>
      </svg>
    );

    return (
      <IconButton
        {...this.props}
        icon={icon}
      />
    );
  }
}

CloseButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  lang: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

CloseButton.defaultProps = {
  className: 'closeButton',
  lang: 'en',
};

export default CloseButton;

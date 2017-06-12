import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import IconButton from './IconButton';

const styles = {
  circle: {
    strokeWidth: '3px',
    fill: 'none',
  },
};

class WedgeLeftButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        height="25"
        width="25"
      >
        <circle cx="25" cy="25" r="23.4" style={[styles.circle]} />
        <polygon points="27.55 36.19 16.36 25.01 27.55 13.82 29.63 15.9 20.52 25.01 29.63 34.11 27.55 36.19" />
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

WedgeLeftButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  lang: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

WedgeLeftButton.defaultProps = {
  className: 'closeButton',
  lang: 'en',
};

export default radium(WedgeLeftButton);

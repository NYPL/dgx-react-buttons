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

class WedgeRightButton extends React.Component {
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
        <polygon points="22.27 13.81 33.46 25 22.27 36.18 20.19 34.1 29.3 25 20.19 15.89 22.27 13.81"/>
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

WedgeRightButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  lang: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

WedgeRightButton.defaultProps = {
  className: 'closeButton',
  lang: 'en',
};

export default radium(WedgeRightButton);

import React from 'react';
import IconButton from './IconButton.js';

class WedgeRightButton extends React.Component {
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
      <polygon points="14.84 0 39.89 24.94 14.84 50 10.11 45.39 30.56 24.94 10.11 4.61 14.84 0"/>
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
  id: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
  lang: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
};

WedgeRightButton.defaultProps = {
  className: 'closeButton',
  lang: 'en',
};

export default WedgeRightButton;

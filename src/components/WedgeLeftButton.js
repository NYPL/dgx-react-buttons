import React from 'react';
import IconButton from './IconButton.js';

class WedgeLeftButton extends React.Component {
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
        <polygon points="35.16 50 10.11 24.94 35.16 0 39.89 4.61 19.44 24.94 39.89 45.39 35.16 50"/>
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
  id: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
  lang: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
};

WedgeLeftButton.defaultProps = {
  className: 'closeButton',
  lang: 'en',
};

export default WedgeLeftButton;

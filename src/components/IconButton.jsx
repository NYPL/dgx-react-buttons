import React from 'react';
import PropTypes from 'prop-types';

class IconButton extends React.Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick(e) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    return (
      <button
        className={`${this.props.className} svgIcon`}
	      onClick={this._onClick}
      >
        {this.props.icon}
      </button>
    );
  }
}

IconButton.propTypes = {
  icon: PropTypes.object.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  lang: PropTypes.string,
};

IconButton.defaultProps = {
  className: '',
  lang: 'en',
};

export default IconButton;

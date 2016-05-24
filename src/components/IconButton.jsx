import React from 'react';

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
  icon: React.PropTypes.object.isRequired,
  id: React.PropTypes.string,
  className: React.PropTypes.string,
  label: React.PropTypes.string,
  lang: React.PropTypes.string,
};

IconButton.defaultProps = {
  className: '',
  lang: 'en',
};

export default IconButton;

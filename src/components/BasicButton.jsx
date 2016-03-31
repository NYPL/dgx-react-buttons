import React from 'react';

class BasicButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        ref={this.props.ref}
        id={this.props.id}
        className={this.props.className}
        name={this.props.name}
        onClick={this.props.onClick}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        style={[this.props.style]}
      >
        {this.props.icon}
        <span>{this.props.label}</span>
      </button>
    );
  }
}

BasicButton.propTypes = {
  id: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  lang: React.PropTypes.string,
  ref: React.PropTypes.string,
  style: React.PropTypes.object,
  icon: React.PropTypes.object,
  onClick: React.PropTypes.func,
  onMouseLeave: React.PropTypes.func,
  onMouseEnter: React.PropTypes.func,
};

BasicButton.defaultProps = {
  id: 'basicButton',
  className: 'basicButton',
  name: 'BasicButton',
  label: 'Basic Button',
  lang: 'en',
  ref: 'BasicButton',
};

export default BasicButton;

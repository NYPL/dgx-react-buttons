// The button component that doesn't activate any link, only interaction and submission
// Import React libraries
import React from 'react';

class BasicButton extends React.Component {
  // Constructor used in ES6
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
        style={[
          this.props.style,
        ]}>
        {this.props.label}
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
  onClick: React.PropTypes.func,
  onMouseLeave: React.PropTypes.func,
  onMouseEnter: React.PropTypes.func,
};

BasicButton.defaultProps = {
  id: 'BasicButton',
  className: 'BasicButton',
  name: 'BasicButton',
  label: 'Basic Button',
  lang: 'en',
  ref: 'BasicButton',
};

// Export the component
export default BasicButton;

import React from 'react';

class SeeMoreButton extends React.Component {
  // Constructor used in ES6
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div
      ref='SeeMoreButton'
      id={this.props.id}
      className={this.props.className}
      href={this.props.target}
      onClick={this._onClick.bind(this)}
      style={[
        styles.base,
        this.props.style
      ]}>
        {this.props.label}
      </div>
    );
  }

  _onClick() {
    this.props.onClick();
  }
};

SeeMoreButton.defaultProps = {
  id: 'SeeMoreButton',
  className: 'see-more-button',
  label: 'Button',
  lang: 'en',
  target: '#',
  onClick() {}
};

const styles = {
  base: {

  }
};

export default SeeMoreButton;
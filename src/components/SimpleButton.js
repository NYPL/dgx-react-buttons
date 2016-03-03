import React from 'react';
import radium from 'radium';

const styles = {
  base: {},
};

class SimpleButton extends React.Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.props.onClick();
  }

  render() {
    return (
      <a
        ref='SimpleButton'
        id={this.props.id}
        className={this.props.className}
        href={this.props.target}
        onClick={this._onClick}
        style={[
          styles.base,
          this.props.style,
        ]}>
        {this.props.label}
      </a>
    );
  }
}

SimpleButton.propTypes = {
  id: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
  lang: React.PropTypes.string,
  target: React.PropTypes.string,
  style: React.PropTypes.object,
  onClick: React.PropTypes.func,
};

SimpleButton.defaultProps = {
  id: 'simpleButton',
  className: 'simpleButton',
  label: 'Button',
  lang: 'en',
  target: '#',
  onClick() {},
};

export default radium(SimpleButton);

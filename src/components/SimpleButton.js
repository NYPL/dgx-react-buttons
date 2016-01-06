import React from 'react';
import radium from 'radium';

// import {ga} from 'dgx-react-ga';

const styles = {
  base: {},
};

class SimpleButton extends React.Component {
  // Constructor used in ES6
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    // ga._trackGeneralEvent(this.props.gaCategory, this.props.gaAction, this.props.gaLabel);
    this.props.onClick();
  }

  render() {
    return (
      <a
        ref="SimpleButton"
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
  id: 'SimpleButton',
  className: 'SimpleButton',
  label: 'Button',
  lang: 'en',
  target: '#',
  onClick() {},
};

export default radium(SimpleButton);

import React from 'react';
import Radium from 'radium';

// import {ga} from 'dgx-react-ga';

class SimpleButton extends React.Component {
  // Constructor used in ES6
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <a
      ref='SimpleButton'
      id={this.props.id}
      className={this.props.className}
      href={this.props.target}
      onClick={this._onClick.bind(this)}
      style={[
        styles.base,
        this.props.style
      ]}>
        {this.props.label}
      </a>
    );
  }

  _onClick() {
    // ga._trackGeneralEvent(this.props.gaCategory, this.props.gaAction, this.props.gaLabel);
    this.props.onClick();
  }
};

SimpleButton.defaultProps = {
  id: 'SimpleButton',
  className: 'SimpleButton',
  label: 'Button',
  lang: 'en',
  target: '#',
  onClick() {}
};

const styles = {
  base: {

  }
};

export default Radium(SimpleButton);

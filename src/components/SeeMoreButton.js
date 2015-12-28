import React from 'react';
import radium from 'radium';

class SeeMoreButton extends React.Component {
  // Constructor used in ES6
  constructor(props) {
    super(props);
  }

  render () {
    let label = (this.props.label !== '') ?
      <span style={styles.label}>{this.props.label}</span> :
      null;

    return (
      <a
        ref='SeeMoreButton'
        id={this.props.id}
        className={this.props.className}
        href={this.props.target}
        onClick={this._onClick.bind(this)}
        style={[
          styles.base,
          this.props.style
        ]}>
          <span style={styles.ellipsis} className='nypl-icon-more-dots'></span>
          {label}
      </a>
    );
  }

  _onClick(e) {
    e.preventDefault();
    this.props.onClick();
  }
};

SeeMoreButton.defaultProps = {
  id: 'SeeMoreButton',
  className: 'see-more-button',
  label: '',
  lang: 'en',
  target: '#',
  onClick() {}
};

const styles = {
  base: {
    textDecoration: 'none',
    color: '#ED1C24',
    display: 'inline-block',
    border: '2px solid #ED1C24',
    padding: '0',
    borderRadius: '28px',
    fontSize: '36px',
    boxSizing: 'content-box'
  },
  ellipsis: {
    display: 'block',
    float: 'left'
  },
  label: {
    display: 'block',
    float: 'left',
    fontSize: '16px',
    lineHeight: '36px',
    margin: '0 5px 0 0'
  }
};

export default radium(SeeMoreButton);
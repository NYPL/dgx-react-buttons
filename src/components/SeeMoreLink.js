import React from 'react';
import radium from 'radium';

const styles = {
  label: {
    display: 'block',
    float: 'left',
    fontSize: '16px',
    lineHeight: '36px',
    margin: '0 5px 0 0',
  },
  link: {
    display: 'inline-block',
    borderRadius: '13px',
    width: '22px',
    height: '22px',
  },
  svg: {
    width: '10px',
    position: 'relative',
    left: '5.5px',
    top: '6px',
  },
};

class SeeMoreLink extends React.Component {
  // Constructor used in ES6
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
      <a
        id={this.props.id}
        className={this.props.className}
        href={this.props.target}
        style={[styles.link]}
      >
        <svg width={10} height={10}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10"
          style={[styles.svg]}>
          <circle className="a" cx="0.9" cy="5" r="0.9"/>
          <circle className="a" cx="5" cy="5" r="0.9"/>
          <circle className="a" cx="9" cy="5" r="0.9"/>
        </svg>
        <span className="iconLink-sm-label visuallyHidden">
          {this.props.label}
        </span>
      </a>

    );
  }
}

SeeMoreLink.propTypes = {
  id: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
  lang: React.PropTypes.string,
  target: React.PropTypes.string,
  style: React.PropTypes.object,
  onClick: React.PropTypes.func,
};

SeeMoreLink.defaultProps = {
  id: 'SeeMoreButton',
  className: 'seeMorebutton',
  label: 'See More',
  lang: 'en',
  target: '#',
  onClick() {},
};

export default radium(SeeMoreLink);

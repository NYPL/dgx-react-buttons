import React from 'react';
import radium from 'radium';

const styles = {
  svg: {
//    width: '10px',
//    position: 'relative',
//    left: '5.5px',
//    top: '6px',
  },
  circle: {
    strokeWidth: '3px',
    fill: 'none',
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
        className={this.props.className + ' btn__icon'}
        href={this.props.target}
        style={[styles.link]}
      >

    <svg viewBox="0 0 50 50" height="25" width="25">
        <circle cx="25" cy="25" r="23.4" style={[styles.circle]} />
      <circle cx="15.5" cy="25" r="2.5" />
      <circle cx="25" cy="25" r="2.5" />
      <circle cx="34.5" cy="25" r="2.5" />
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
  className: 'seeMoreButton',
  label: 'See More',
  lang: 'en',
  target: '#',
  onClick() {},
};

export default radium(SeeMoreLink);

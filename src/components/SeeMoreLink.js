import React from 'react';
import radium from 'radium';

const styles = {
  circle: {
    strokeWidth: '3px',
    fill: 'none',
  },
};

class SeeMoreLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a
        id={this.props.id}
        className={`${this.props.defaultClass} ${this.props.className}`}
        href={this.props.target}
        style={[styles.link]}
      >
        <svg viewBox="0 0 50 50" height="25" width="25">
          <circle cx="25" cy="25" r="23.4" style={[styles.circle]} />
          <circle cx="15.5" cy="25" r="2.5" />
          <circle cx="25" cy="25" r="2.5" />
          <circle cx="34.5" cy="25" r="2.5" />
        </svg>
        <span className={`${this.props.defaultClass}-label visuallyHidden`}>
          {this.props.label}
        </span>
      </a>
    );
  }
}

SeeMoreLink.propTypes = {
  id: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
  defaultClass: React.PropTypes.string,
  label: React.PropTypes.string,
  lang: React.PropTypes.string,
  target: React.PropTypes.string,
  style: React.PropTypes.object,
};

SeeMoreLink.defaultProps = {
  id: 'SeeMoreLink',
  className: '',
  defaultClass: 'seeMoreLink',
  label: 'See More',
  lang: 'en',
  target: '#',
};

export default radium(SeeMoreLink);

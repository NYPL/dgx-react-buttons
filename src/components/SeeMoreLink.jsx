import React from 'react';
import PropTypes from 'prop-types';
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
        className={`${this.props.defaultClass} ${this.props.className} svgIcon`}
        href={this.props.target}
        style={[styles.link]}
      >
        <svg viewBox="0 0 50 50" height="25" width="25">
          <circle cx="25" cy="25" r="23.4" style={[styles.circle]} />
          <circle cx="15.5" cy="25" r="2.5" />
          <circle cx="25" cy="25" r="2.5" />
          <circle cx="34.5" cy="25" r="2.5" />
        </svg>
        <span className="label visuallyHidden">
          {this.props.label}
        </span>
      </a>
    );
  }
}

SeeMoreLink.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  defaultClass: PropTypes.string,
  label: PropTypes.string,
  lang: PropTypes.string,
  target: PropTypes.string,
  style: PropTypes.object,
};

SeeMoreLink.defaultProps = {
  id: 'seeMoreLink',
  className: '',
  defaultClass: 'seeMoreLink',
  label: 'See More',
  lang: 'en',
  target: '#',
};

export default radium(SeeMoreLink);

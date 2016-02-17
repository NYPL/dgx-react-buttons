import React from 'react';
import radium from 'radium';

const styles = {
  base: {
    textDecoration: 'none',
    color: '#A3A19E',
    display: 'inline-block',
    border: '2px solid #A3A19E',
    padding: '0',
    borderRadius: '28px',
    fontSize: '36px',
    boxSizing: 'content-box',
  },
  ellipsis: {
    display: 'block',
    float: 'left',
  },
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
  linkBorder: {
    border: 'solid 2px #A3A19E',
  },
  svg: {
    width: '10px',
    position: 'relative',
    left: '5.5px',
    top: '6px',
  },
  svgFill: {
    fill: '#A3A19E',
  },
};

class SeeMoreButton extends React.Component {
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
    const label = (this.props.label !== '') ?
      <span style={styles.label}>{this.props.label}</span> :
      null;

    return (
      //<a
      //  ref="SeeMoreButton"
      //  id={this.props.id}
      //  className={this.props.className}
      //  href={this.props.target}
      //  onClick={this._onClick}
      //  style={[
      //    styles.base,
      //    this.props.style,
      //  ]}>
      //    <span style={styles.ellipsis} className="nypl-icon-more-dots"></span>
      //    {label}
      //</a>

      <a
	id={this.props.id}
	className={this.props.className}
	href={this.props.target}
	style={[styles.link, styles.linkBorder && {border: 'solid 2px ' + this.props.color}]}
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 50 50"
	style={[styles.svg, styles.svgFill && {fill: this.props.color}]}>
          <circle class="a" cx="4.5" cy="25" r="4.5"/>
          <circle class="a" cx="25" cy="25" r="4.5"/>
          <circle class="a" cx="45.5" cy="25" r="4.5"/>
      </svg>
	
      <span className="iconLink-sm-label visuallyHidden">
	    {this.props.label}
	</span>
      </a>

    );
  }
}

SeeMoreButton.propTypes = {
  id: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
  lang: React.PropTypes.string,
  target: React.PropTypes.string,
  style: React.PropTypes.object,
  onClick: React.PropTypes.func,
};

SeeMoreButton.defaultProps = {
  id: 'SeeMoreButton',
  className: 'see-more-button',
  label: 'See More',
  lang: 'en',
  target: '#',
  color: 'blue',
  onClick() {},
};

export default radium(SeeMoreButton);

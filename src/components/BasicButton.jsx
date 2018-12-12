import React from 'react';
import PropTypes from 'prop-types';

const BasicButton = ({
  id,
  className,
  name,
  style,
  label,
  icon,
  labelAccessible,
  onClick,
  onMouseEnter,
  onMouseLeave,
  iconSide,
}) => (
  <button
    id={id}
    className={className}
    name={name}
    style={style}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {iconSide === 'left' ? icon : ''}
    <span
      className={(labelAccessible) ? 'visuallyHidden' : null}
    >
      {label}
    </span>
    {iconSide === 'right' ? icon : ''}
  </button>
);

BasicButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  lang: PropTypes.string,
  labelAccessible: PropTypes.bool,
  style: PropTypes.object,
  icon: PropTypes.object,
  onClick: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseEnter: PropTypes.func,
  iconSide: PropTypes.string,
};

BasicButton.defaultProps = {
  className: 'basicButton',
  label: 'Basic Button',
  lang: 'en',
  labelAccessible: false,
  iconSide: 'left',
};

export default BasicButton;

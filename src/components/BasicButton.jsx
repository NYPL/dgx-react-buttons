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
    {icon}
    <span
      className={(labelAccessible) ? 'visuallyHidden' : null}
    >
      {label}
    </span>
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
};

BasicButton.defaultProps = {
  className: 'basicButton',
  label: 'Basic Button',
  lang: 'en',
  labelAccessible: false,
};

export default BasicButton;

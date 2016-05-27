import React from 'react';

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
  id: React.PropTypes.string,
  className: React.PropTypes.string,
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  lang: React.PropTypes.string,
  labelAccessible: React.PropTypes.bool,
  style: React.PropTypes.object,
  icon: React.PropTypes.object,
  onClick: React.PropTypes.func,
  onMouseLeave: React.PropTypes.func,
  onMouseEnter: React.PropTypes.func,
};

BasicButton.defaultProps = {
  className: 'basicButton',
  label: 'Basic Button',
  lang: 'en',
  labelAccessible: false,
};

export default BasicButton;

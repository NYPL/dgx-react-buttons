'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var SeeMoreButton = (function (_React$Component) {
  _inherits(SeeMoreButton, _React$Component);

  // Constructor used in ES6

  function SeeMoreButton(props) {
    _classCallCheck(this, SeeMoreButton);

    _get(Object.getPrototypeOf(SeeMoreButton.prototype), 'constructor', this).call(this, props);
  }

  _createClass(SeeMoreButton, [{
    key: 'render',
    value: function render() {
      var label = this.props.label !== '' ? _react2['default'].createElement(
        'span',
        { style: styles.label },
        this.props.label
      ) : null;

      return _react2['default'].createElement(
        'a',
        {
          ref: 'SeeMoreButton',
          id: this.props.id,
          className: this.props.className,
          href: this.props.target,
          onClick: this._onClick.bind(this),
          style: [styles.base, this.props.style] },
        _react2['default'].createElement('span', { style: styles.ellipsis, className: 'nypl-icon-more-dots' }),
        label
      );
    }
  }, {
    key: '_onClick',
    value: function _onClick(e) {
      e.preventDefault();
      this.props.onClick();
    }
  }]);

  return SeeMoreButton;
})(_react2['default'].Component);

;

SeeMoreButton.defaultProps = {
  id: 'SeeMoreButton',
  className: 'see-more-button',
  label: '',
  lang: 'en',
  target: '#',
  onClick: function onClick() {}
};

var styles = {
  base: {
    textDecoration: 'none',
    color: '#ED1C24',
    display: 'inline-block',
    border: '2px solid #ED1C24',
    padding: '0 0 0 0',
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

exports['default'] = (0, _radium2['default'])(SeeMoreButton);
module.exports = exports['default'];
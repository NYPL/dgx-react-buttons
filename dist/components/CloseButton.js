'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconButtonJs = require('./IconButton.js');

var _IconButtonJs2 = _interopRequireDefault(_IconButtonJs);

var CloseButton = (function (_React$Component) {
  _inherits(CloseButton, _React$Component);

  function CloseButton(props) {
    _classCallCheck(this, CloseButton);

    _get(Object.getPrototypeOf(CloseButton.prototype), 'constructor', this).call(this, props);
  }

  _createClass(CloseButton, [{
    key: 'render',
    value: function render() {
      var icon = _react2['default'].createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 50 50',
          height: 10,
          width: 10
        },
        _react2['default'].createElement('polygon', { points: '50 5.84 44.16 0 25 19.16 5.84 0 0 5.84 19.16 25 0 44.16 5.84 50 25 30.84 44.16 50 50 44.16 30.84 25 50 5.84' })
      );

      return _react2['default'].createElement(_IconButtonJs2['default'], _extends({}, this.props, {
        icon: icon
      }));
    }
  }]);

  return CloseButton;
})(_react2['default'].Component);

CloseButton.propTypes = {
  id: _react2['default'].PropTypes.string.isRequired,
  className: _react2['default'].PropTypes.string.isRequired,
  label: _react2['default'].PropTypes.string,
  lang: _react2['default'].PropTypes.string,
  onClick: _react2['default'].PropTypes.func.isRequired
};

CloseButton.defaultProps = {
  className: 'closeButton',
  lang: 'en'
};

exports['default'] = CloseButton;
module.exports = exports['default'];
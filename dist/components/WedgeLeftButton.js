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

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _IconButtonJs = require('./IconButton.js');

var _IconButtonJs2 = _interopRequireDefault(_IconButtonJs);

var styles = {
  circle: {
    strokeWidth: '3px',
    fill: 'none'
  }
};

var WedgeLeftButton = (function (_React$Component) {
  _inherits(WedgeLeftButton, _React$Component);

  function WedgeLeftButton(props) {
    _classCallCheck(this, WedgeLeftButton);

    _get(Object.getPrototypeOf(WedgeLeftButton.prototype), 'constructor', this).call(this, props);
  }

  _createClass(WedgeLeftButton, [{
    key: 'render',
    value: function render() {
      var icon = _react2['default'].createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 50 50',
          height: '25',
          width: '25'
        },
        _react2['default'].createElement('circle', { cx: '25', cy: '25', r: '23.4', style: [styles.circle] }),
        _react2['default'].createElement('polygon', { points: '27.55 36.19 16.36 25.01 27.55 13.82 29.63 15.9 20.52 25.01 29.63 34.11 27.55 36.19' })
      );

      return _react2['default'].createElement(_IconButtonJs2['default'], _extends({}, this.props, {
        icon: icon
      }));
    }
  }]);

  return WedgeLeftButton;
})(_react2['default'].Component);

WedgeLeftButton.propTypes = {
  id: _react2['default'].PropTypes.string.isRequired,
  className: _react2['default'].PropTypes.string.isRequired,
  label: _react2['default'].PropTypes.string,
  lang: _react2['default'].PropTypes.string,
  onClick: _react2['default'].PropTypes.func.isRequired
};

WedgeLeftButton.defaultProps = {
  className: 'closeButton',
  lang: 'en'
};

exports['default'] = (0, _radium2['default'])(WedgeLeftButton);
module.exports = exports['default'];
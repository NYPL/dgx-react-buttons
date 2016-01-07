// Import React Libraries
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

// Misc

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var styles = {
  base: {
    color: '#A3A19E',
    border: '2px solid #A3A19E'
  },
  dots: {
    border: '3px solid #A3A19E'
  }
};

var PaginationButton = (function (_React$Component) {
  _inherits(PaginationButton, _React$Component);

  // Constructor used in ES6

  function PaginationButton(props) {
    _classCallCheck(this, PaginationButton);

    _get(Object.getPrototypeOf(PaginationButton.prototype), 'constructor', this).call(this, props);
  }

  _createClass(PaginationButton, [{
    key: 'render',
    value: function render() {
      var dotElements = [],

      // Add loading class and the loading animation if it is loading now
      isLoading = (0, _classnames2['default'])({ loading: this.props.isLoading });
      var i = undefined;

      // Generate the dots for the pagination button.
      // The number of the dots is determinated by the props.
      for (i = 0; i < this.props.dots; i++) {
        dotElements.push(_react2['default'].createElement('li', { id: this.props.id + '__dot-row__element_' + i,
          className: this.props.className + '__dot-row__element ' + isLoading,
          key: i,
          style: [styles.dots, this.props.dotStyle] }));
      }

      return _react2['default'].createElement(
        'div',
        { id: this.props.id,
          className: '' + this.props.className,
          onClick: this.props.onClick,
          style: [styles.base, this.props.style] },
        _react2['default'].createElement(
          'ul',
          {
            id: this.props.id + '__dot-row',
            className: this.props.className + '__dot-row' },
          dotElements,
          _react2['default'].createElement(
            'li',
            {
              id: this.props.id + '__dot-row__number',
              className: this.props.className + '__dot-row__number' },
            this.props.label
          )
        )
      );
    }
  }]);

  return PaginationButton;
})(_react2['default'].Component);

PaginationButton.propTypes = {
  id: _react2['default'].PropTypes.string.isRequired,
  className: _react2['default'].PropTypes.string.isRequired,
  name: _react2['default'].PropTypes.string,
  label: _react2['default'].PropTypes.string,
  lang: _react2['default'].PropTypes.string,
  isLoading: _react2['default'].PropTypes.bool.isRequired,
  dots: _react2['default'].PropTypes.number,
  onClick: _react2['default'].PropTypes.func,
  style: _react2['default'].PropTypes.object,
  dotStyle: _react2['default'].PropTypes.object
};

PaginationButton.defaultProps = {
  id: 'PaginationButton',
  className: 'pagination-button',
  name: 'pagination button',
  label: 'Pagination Button',
  lang: 'en',
  dots: 3
};

// Export the component
exports['default'] = (0, _radium2['default'])(PaginationButton);
module.exports = exports['default'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SeeMoreButton = (function (_React$Component) {
  _inherits(SeeMoreButton, _React$Component);

  // Constructor used in ES6

  function SeeMoreButton(props) {
    _classCallCheck(this, SeeMoreButton);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SeeMoreButton).call(this, props));
  }

  _createClass(SeeMoreButton, [{
    key: 'render',
    value: function render() {
      var label = this.props.label !== '' ? _react2.default.createElement(
        'span',
        { style: styles.label },
        this.props.label
      ) : null;

      return _react2.default.createElement(
        'a',
        {
          ref: 'SeeMoreButton',
          id: this.props.id,
          className: this.props.className,
          href: this.props.target,
          onClick: this._onClick.bind(this),
          style: [styles.base, this.props.style] },
        _react2.default.createElement('span', { style: styles.ellipsis, className: 'nypl-icon-more-dots' }),
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
})(_react2.default.Component);

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

exports.default = (0, _radium2.default)(SeeMoreButton);
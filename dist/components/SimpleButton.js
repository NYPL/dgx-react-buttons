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

// import {ga} from 'dgx-react-ga';

var SimpleButton = (function (_React$Component) {
  _inherits(SimpleButton, _React$Component);

  // Constructor used in ES6

  function SimpleButton(props) {
    _classCallCheck(this, SimpleButton);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SimpleButton).call(this, props));
  }

  _createClass(SimpleButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'a',
        {
          ref: 'SimpleButton',
          id: this.props.id,
          className: this.props.className,
          href: this.props.target,
          onClick: this._onClick.bind(this),
          style: [styles.base, this.props.style] },
        this.props.label
      );
    }
  }, {
    key: '_onClick',
    value: function _onClick() {
      // ga._trackGeneralEvent(this.props.gaCategory, this.props.gaAction, this.props.gaLabel);
      this.props.onClick();
    }
  }]);

  return SimpleButton;
})(_react2.default.Component);

;

SimpleButton.defaultProps = {
  id: 'SimpleButton',
  className: 'SimpleButton',
  label: 'Button',
  lang: 'en',
  target: '#',
  onClick: function onClick() {}
};

var styles = {
  base: {}
};

exports.default = (0, _radium2.default)(SimpleButton);
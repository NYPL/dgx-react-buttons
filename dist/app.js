'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _buttonsJs = require('./buttons.js');

/*
 * It's also possible to get the components in this following example,
 * but the top is more concise
 */
// import Buttons from './buttons.js';
// let BasicButton = Buttons.BasicButton,
//   PaginationButton = Buttons.PaginationButton,
//   SeeMoreButton = Buttons.SeeMoreButton,
//   SimpleButton = Buttons.SimpleButton;

/* app.jsx
 * Used for local development of React Components
 */
_react2['default'].render(_react2['default'].createElement(_buttonsJs.BasicButton, null), document.getElementById('basic'));
_react2['default'].render(_react2['default'].createElement(_buttonsJs.PaginationButton, null), document.getElementById('pagination'));
_react2['default'].render(_react2['default'].createElement(_buttonsJs.SeeMoreButton, null), document.getElementById('seeMore'));
_react2['default'].render(_react2['default'].createElement(_buttonsJs.SimpleButton, null), document.getElementById('simple'));
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BasicButton = require('./components/BasicButton.js');

var _BasicButton2 = _interopRequireDefault(_BasicButton);

var _PaginationButton = require('./components/PaginationButton.js');

var _PaginationButton2 = _interopRequireDefault(_PaginationButton);

var _SeeMoreButton = require('./components/SeeMoreButton.js');

var _SeeMoreButton2 = _interopRequireDefault(_SeeMoreButton);

var _SimpleButton = require('./components/SimpleButton.js');

var _SimpleButton2 = _interopRequireDefault(_SimpleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  BasicButton: _BasicButton2.default,
  PaginationButton: _PaginationButton2.default,
  SeeMoreButton: _SeeMoreButton2.default,
  SimpleButton: _SimpleButton2.default
};
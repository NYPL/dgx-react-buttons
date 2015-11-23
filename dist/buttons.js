'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsBasicButtonJs = require('./components/BasicButton.js');

var _componentsBasicButtonJs2 = _interopRequireDefault(_componentsBasicButtonJs);

var _componentsPaginationButtonJs = require('./components/PaginationButton.js');

var _componentsPaginationButtonJs2 = _interopRequireDefault(_componentsPaginationButtonJs);

var _componentsSeeMoreButtonJs = require('./components/SeeMoreButton.js');

var _componentsSeeMoreButtonJs2 = _interopRequireDefault(_componentsSeeMoreButtonJs);

var _componentsSimpleButtonJs = require('./components/SimpleButton.js');

var _componentsSimpleButtonJs2 = _interopRequireDefault(_componentsSimpleButtonJs);

exports['default'] = {
  BasicButton: _componentsBasicButtonJs2['default'],
  PaginationButton: _componentsPaginationButtonJs2['default'],
  SeeMoreButton: _componentsSeeMoreButtonJs2['default'],
  SimpleButton: _componentsSimpleButtonJs2['default']
};
module.exports = exports['default'];
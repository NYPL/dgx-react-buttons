'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _buttonsJs = require('./buttons.js');

require('./styles/styles.scss');

var styles = {
  whiteBorder: {
    color: '#fff',
    border: '2px solid #fff'
  },
  redBorder: {
    color: '#ED1C24',
    border: '2px solid #ED1C24'
  },
  redDots: {
    border: '3px solid #ED1C24'
  }
};

var closeClick = function closeClick() {
  console.log('Close!');
};
var leftClick = function leftClick() {
  console.log('Left!');
};
var rightClick = function rightClick() {
  console.log('Right!');
};

var isLoading = true,
    basic = _react2['default'].createElement(_buttonsJs.BasicButton, { id: 'BasicButton-Component' }),
    pagination = _react2['default'].createElement(_buttonsJs.PaginationButton, { id: 'PaginationButton-Component', isLoading: isLoading }),
    paginationRed = _react2['default'].createElement(_buttonsJs.PaginationButton, {
  id: 'PaginationButton-Component',
  isLoading: isLoading,
  style: styles.redBorder,
  dotStyle: styles.redDots }),
    seeMore = _react2['default'].createElement(_buttonsJs.SeeMoreLink, { id: 'SeeMoreBtn' }),
    seeMoreRed = _react2['default'].createElement(_buttonsJs.SeeMoreLink, { id: 'SeeMoreBtnRed', style: styles.redBorder }),
    seeMoreWhite = _react2['default'].createElement(_buttonsJs.SeeMoreLink, { id: 'SeeMoreBtnWhite', style: styles.whiteBorder }),
    seeMoreLabel = _react2['default'].createElement(_buttonsJs.SeeMoreLink, { id: 'SeeMoreBtn-Label-Component', label: 'See More' }),
    seeMoreRedLabel = _react2['default'].createElement(_buttonsJs.SeeMoreLink, {
  id: 'SeeMoreBtn-Label-Component',
  label: 'See More',
  style: styles.redBorder }),
    simple = _react2['default'].createElement(_buttonsJs.SimpleButton, { id: 'SimpleButton-Component' }),
    icon = _react2['default'].createElement(_buttonsJs.CloseButton, { onClick: closeClick }),
    wedgeRight = _react2['default'].createElement(_buttonsJs.WedgeRightButton, { onClick: rightClick }),
    wedgeLeft = _react2['default'].createElement(_buttonsJs.WedgeLeftButton, { onClick: leftClick });

/*
 * Used for local development of React Components
 */
_react2['default'].render(basic, document.getElementById('basic'));
_react2['default'].render(pagination, document.getElementById('pagination'));
_react2['default'].render(paginationRed, document.getElementById('paginationRed'));
_react2['default'].render(seeMore, document.getElementById('seeMore'));
_react2['default'].render(seeMore, document.getElementById('seeMoreSized'));
_react2['default'].render(seeMore, document.getElementById('seeMoreScaled'));
_react2['default'].render(seeMoreRed, document.getElementById('seeMoreRed'));
_react2['default'].render(seeMoreWhite, document.getElementById('seeMoreWhite'));
_react2['default'].render(seeMoreLabel, document.getElementById('seeMoreLabel'));
_react2['default'].render(seeMoreRedLabel, document.getElementById('seeMoreRedLabel'));
_react2['default'].render(simple, document.getElementById('simple'));
_react2['default'].render(icon, document.getElementById('icon'));
_react2['default'].render(wedgeRight, document.getElementById('wedgeRight'));
_react2['default'].render(wedgeLeft, document.getElementById('wedgeLeft'));
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _buttonsJs = require('./buttons.js');

require('./styles/styles.scss');

var styles = {
  whiteSeeMore: {
    color: '#fff',
    border: '2px solid #fff'
  }
};

var isLoading = true,
    basic = _react2['default'].createElement(_buttonsJs.BasicButton, { id: 'BasicButton-Component' }),
    pagination = _react2['default'].createElement(_buttonsJs.PaginationButton, { id: 'PaginationButton-Component', isLoading: isLoading }),
    seeMore = _react2['default'].createElement(_buttonsJs.SeeMoreButton, { id: 'SeeMoreButton-Component' }),
    seeMoreWhite = _react2['default'].createElement(_buttonsJs.SeeMoreButton, { id: 'SeeMoreButton-Component', style: styles.whiteSeeMore }),
    seeMoreWithLabel = _react2['default'].createElement(_buttonsJs.SeeMoreButton, { id: 'SeeMoreButton-Label-Component', label: 'See More' }),
    simple = _react2['default'].createElement(_buttonsJs.SimpleButton, { id: 'SimpleButton-Component' });

/*
 * Used for local development of React Components
 */
_react2['default'].render(basic, document.getElementById('basic'));
_react2['default'].render(pagination, document.getElementById('pagination'));
_react2['default'].render(seeMore, document.getElementById('seeMore'));
_react2['default'].render(seeMoreWhite, document.getElementById('seeMoreWhite'));
_react2['default'].render(seeMoreWithLabel, document.getElementById('seeMoreWithLabel'));
_react2['default'].render(simple, document.getElementById('simple'));
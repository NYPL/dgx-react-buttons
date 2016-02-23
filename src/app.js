import React from 'react';
import {
  BasicButton,
  PaginationButton,
  SeeMoreLink,
  SimpleButton,
} from './buttons.js';

import './styles/styles.scss';

const styles = {
  whiteBorder: {
    color: '#fff',
    border: '2px solid #fff',
  },
  redBorder: {
    color: '#ED1C24',
    border: '2px solid #ED1C24',
  },
  redDots: {
    border: '3px solid #ED1C24',
  },
};

const isLoading = true,
  basic = <BasicButton id="BasicButton-Component"/>,
  pagination =
    <PaginationButton id="PaginationButton-Component" isLoading={isLoading}/>,
  paginationRed =
    (<PaginationButton
      id="PaginationButton-Component"
      isLoading={isLoading}
      style={styles.redBorder}
      dotStyle={styles.redDots} />),
  seeMore = <SeeMoreLink id="SeeMoreBtn" />,
  seeMoreRed = <SeeMoreLink id="SeeMoreBtnRed" style={styles.redBorder} />,
  seeMoreWhite =
    <SeeMoreLink id="SeeMoreBtnWhite" style={styles.whiteBorder} />,
  seeMoreLabel =
    <SeeMoreLink id="SeeMoreBtn-Label-Component" label="See More" />,
  seeMoreRedLabel =
    (<SeeMoreLink
      id="SeeMoreBtn-Label-Component"
      label="See More"
      style={styles.redBorder} />),
  simple = <SimpleButton id="SimpleButton-Component" />;

/*
 * Used for local development of React Components
 */
React.render(basic, document.getElementById('basic'));
React.render(pagination, document.getElementById('pagination'));
React.render(paginationRed, document.getElementById('paginationRed'));
React.render(seeMore, document.getElementById('seeMore'));
React.render(seeMore, document.getElementById('seeMoreScaled'));
React.render(seeMoreRed, document.getElementById('seeMoreRed'));
React.render(seeMoreWhite, document.getElementById('seeMoreWhite'));
React.render(seeMoreLabel, document.getElementById('seeMoreLabel'));
React.render(seeMoreRedLabel, document.getElementById('seeMoreRedLabel'));
React.render(simple, document.getElementById('simple'));

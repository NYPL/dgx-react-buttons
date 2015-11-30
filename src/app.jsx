import React from 'react';
import {
  BasicButton,
  PaginationButton,
  SeeMoreButton,
  SimpleButton
} from './buttons.js';

import './styles/styles.scss';

let basic = <BasicButton id='BasicButton-Component'/>,
  pagination =
    <PaginationButton id='PaginationButton-Component' isLoading={true} />,
  seeMore = <SeeMoreButton id='SeeMoreButton-Component' />,
  seeMoreWithLabel =
    <SeeMoreButton id='SeeMoreButton-Label-Component' label='See More' />,
  simple = <SimpleButton id='SimpleButton-Component' />;

/*
 * Used for local development of React Components
 */
React.render(basic, document.getElementById("basic"));
React.render(pagination, document.getElementById("pagination"));
React.render(seeMore, document.getElementById("seeMore"));
React.render(seeMoreWithLabel, document.getElementById("seeMoreWithLabel"));
React.render(simple, document.getElementById("simple"));

import React from 'react';
import { render } from 'react-dom';
import { CarouselCircleIcon } from 'dgx-svg-icons';
import {
  BasicButton,
  PaginationButton,
  SeeMoreLink,
  CloseButton,
  WedgeRightButton,
  WedgeLeftButton,
} from './buttons.jsx';

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
};

const closeClick = () => { console.log('Close!'); };
const leftClick = () => { console.log('Left!'); };
const rightClick = () => { console.log('Right!'); };


// BasicButton
render(<BasicButton />, document.getElementById('basic'));

// BasicButton with SVG Icon and hidden label by boolean
render(
  <BasicButton labelAccessible icon={<CarouselCircleIcon type="solid" />} />,
  document.getElementById('basicAccessible')
);

// BasicButton with SVG icon
render(
  <BasicButton icon={<CarouselCircleIcon type="solid" />} />,
  document.getElementById('basicWithSvgIcon')
);

// PaginationButton with Loading boolean set to true
render(
  <PaginationButton isLoading />,
  document.getElementById('pagination')
);

// SeeMore Links with Resize
render(<SeeMoreLink id="seeMoreLink" />, document.getElementById('seeMore'));
render(<SeeMoreLink id="seeMoreLink" />, document.getElementById('seeMoreSized'));
render(<SeeMoreLink id="seeMoreLink" />, document.getElementById('seeMoreScaled'));

// SeeMoreLink with red border
render(
  <SeeMoreLink id="SeeMoreBtnRed" style={styles.redBorder} />,
  document.getElementById('seeMoreRed')
);

// SeeMoreLink with white border
render(
  <SeeMoreLink id="SeeMoreBtnWhite" style={styles.whiteBorder} />,
  document.getElementById('seeMoreWhite')
);

// SeeMoreLink with label
render(
  <SeeMoreLink id="SeeMoreBtn-Label-Component" label="See More" />,
  document.getElementById('seeMoreLabel')
);

// SeeMoreLink with red label
render(
  <SeeMoreLink id="SeeMoreBtn-Label-Component" label="See More" style={styles.redBorder} />,
  document.getElementById('seeMoreRedLabel')
);

// CloseButton
render(
  <CloseButton id="CloseButton-Component" onClick={closeClick} />,
  document.getElementById('icon')
);

// wedgeRight
render(<WedgeRightButton onClick={rightClick} />, document.getElementById('wedgeRight'));

// wedgeLeft
render(<WedgeLeftButton onClick={leftClick} />, document.getElementById('wedgeLeft'));

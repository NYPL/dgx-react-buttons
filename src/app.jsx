import React from 'react';
import {
  BasicButton,
  PaginationButton,
  SeeMoreButton,
  SimpleButton
} from './buttons.js';

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
React.render(<BasicButton />, document.getElementById("basic"));
React.render(<PaginationButton />, document.getElementById("pagination"));
React.render(<SeeMoreButton />, document.getElementById("seeMore"));
React.render(<SimpleButton />, document.getElementById("simple"));

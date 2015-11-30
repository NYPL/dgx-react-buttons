# NYPL React Button Components

Different button components used in the dgx React apps.

## Usage
Require dgx-react-buttons as a dependency in your package.json file, pointing to the `master` branch.

### Import
```
#!javascript
    /** ES6 **/
    import React from 'react';
    import {
        BasicButton,
        PaginationButton,
        SeeMoreButton,
        SimpleButton
    } from 'dgx-react-buttons';
    
    // Or just import a specific button
    import { SeeMoreButton } from 'dgx-react-buttons';

    // It's also possible to get the components in this following example,
    // but the top is more concise.
    import Buttons from './buttons.js';
    let BasicButton = Buttons.BasicButton,
        PaginationButton = Buttons.PaginationButton,
        SeeMoreButton = Buttons.SeeMoreButton,
        SimpleButton = Buttons.SimpleButton;

    /** ES5 **/
    var Buttons = require('dgx-react-buttons'),
        Basicbutton = Buttons.BasicButton;
```

### Basic Button

### Pagination Button

### See More Button

### Simple Button

## Demo

        $ npm install
        $ npm start

Check localhost:3000.

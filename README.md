NYPL React Buttons

```
#!javascript
    // ES6:
    import React from 'react';
    import {
        BasicButton,
        PaginationButton,
        SeeMoreButton,
        SimpleButton
    } from 'dgx-react-buttons';
    
    // Or one
    import { SeeMoreButton } from 'dgx-react-buttons';

    /*
     * It's also possible to get the components in this following example,
     * but the top is more concise
     */
    import Buttons from './buttons.js';
    let BasicButton = Buttons.BasicButton,
        PaginationButton = Buttons.PaginationButton,
        SeeMoreButton = Buttons.SeeMoreButton,
        SimpleButton = Buttons.SimpleButton;

    // ES5:
    var Buttons = require('dgx-react-buttons'),
        Basicbutton = Buttons.BasicButton;
```
# NYPL React Button Components

Different button components used in the dgx React apps.

## Version
0.1.1

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

Available props:

    BasicButton.propTypes = {
      id: React.PropTypes.string.isRequired,
      className: React.PropTypes.string.isRequired,
      name: React.PropTypes.string,
      label: React.PropTypes.string,
      lang: React.PropTypes.string,
      ref: React.PropTypes.string,
      style: React.PropTypes.object,
      onClick: React.PropTypes.func,
      onMouseLeave: React.PropTypes.func,
      onMouseEnter: React.PropTypes.func,
    };        

Usage:

    <BasicButton id="BasicButton-Component" />

### Pagination Button

Available props:

    PaginationButton.propTypes = {
      id: React.PropTypes.string.isRequired,
      className: React.PropTypes.string.isRequired,
      name: React.PropTypes.string,
      label: React.PropTypes.string,
      lang: React.PropTypes.string,
      isLoading: React.PropTypes.bool.isRequired,
      dots: React.PropTypes.number,
      onClick: React.PropTypes.func,
      style: React.PropTypes.object,
      dotStyle: React.PropTypes.object,
    };

Usage:

    const styles = {
      redBorder: {
        color: '#ED1C24',
        border: '2px solid #ED1C24',
      },
      redDots: {
        border: '3px solid #ED1C24',
      },
    };

    <PaginationButton
      id="PaginationButton-Component"
      isLoading={isLoading}
      style={styles.redBorder}
      dotStyle={styles.redDots} />

### See More Button

Available props:

    SeeMoreButton.propTypes = {
      id: React.PropTypes.string.isRequired,
      className: React.PropTypes.string.isRequired,
      label: React.PropTypes.string,
      lang: React.PropTypes.string,
      target: React.PropTypes.string,
      style: React.PropTypes.object,
      onClick: React.PropTypes.func,
    };

Usage:

    <SeeMoreButton
      id="SeeMoreBtn-Label-Component"
      label="See More"
      style={styles.redBorder} />

### Simple Button

Available props:

    SimpleButton.propTypes = {
      id: React.PropTypes.string.isRequired,
      className: React.PropTypes.string.isRequired,
      label: React.PropTypes.string,
      lang: React.PropTypes.string,
      target: React.PropTypes.string,
      style: React.PropTypes.object,
      onClick: React.PropTypes.func,
    };

Usage:

    <SimpleButton id="SimpleButton-Component" />

## Demo

        $ npm install
        $ npm start

Check localhost:3000.

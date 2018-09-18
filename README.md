# Welcome to [React](https://reactjs.org/) Snippet Component :)


## Installation

React Snippet Component is available as an [NPM Package](https://www.npmjs.com/package/react-snippet-component)

using npm

```bash
npm i react-snippet-component
```

## Usage

```javascript
import React from 'react';
import styled from 'styled-components'
import SimpleButton from 'SimpleButton';

import NyanCat from "nyancat.jpg"

const SnippetComponent = () => (
  <SniRoot>
    <SniImage width="100%" src={NyanCat} alt="NyanCat" />
    <SniFigcap>
      <SniTitle>Nyan <SniSpan>Cat</SniSpan></SniTitle>
    </SniFigcap>
    <SniA href="#"></SniA>
  </SniRoot>
);
```

## Passing information by props

* SniImage
  - Import your Image
  - props with: the size of your image
  - props src / alt: the name of image that you import
  
* SniA
   - href: add a link in your snippet
   
## Dependences

* [Styled-Components](https://styled-components.com) 

## License

This project is licensed under the terms of the [MIT license](https://github.com/mui-org/material-ui/blob/master/LICENSE).

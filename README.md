# Welcome to [React](https://reactjs.org/) Snippet Component :)

## See in Action

![Component Gif](https://github.com/rebyoliveira/react-snippet-component/blob/master/docs/react_component.gif?raw=true)

## Installation

React Snippet Component is available as an [NPM Package](https://www.npmjs.com/package/react-snippet-component)

using npm

```bash
npm i react-snippet-component
```

## Usage

```javascript
import React from 'react'
import SnippetComponent from 'react-snippet-component'
import NyanCat from '../images/nyan-cat.jpg'

const Snippet = () => (
  <div>
    <div>
      <h1>Hello!</h1>
      <p>Welcome to my snippet</p>
    </div>
    <SnippetComponent
      image={NyanCat}
      alt="NyanCat"
      title="Title"
      span="Span"
      href="https://rebyoliveira.github.io/projects/"
    />
  </div>
)

export default Snippet

```


## Dependencies

SnippetComponent.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  span: PropTypes.string,
  href: PropTypes.string
}


## License

This project is licensed under the terms of the [MIT license](https://github.com/mui-org/material-ui/blob/master/LICENSE).

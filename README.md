# hamoc-react-form

> The basic form components for hamoc application

[![NPM](https://img.shields.io/npm/v/hamoc-react-form.svg)](https://www.npmjs.com/package/hamoc-react-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

If Jfrog is configured, just run the following lines

```bash
npm install --save hamoc-react-form
```

or run

```bash
npm install --save hamoc-react-form --registry https://trilateral.jfrog.io/artifactory/api/npm/hamoc-npm-local/
```

## Usage Button Component

```jsx
import React, { Component } from 'react'

import ButtonComponent from 'hamoc-react-form'
import 'hamoc-react-form/dist/index.css'

class Example extends Component {
  onButtonClicked = () => {
    console.log('clicked')
  }
  render() {
    return <ButtonComponent text='Submit' handleClick={onButtonClicked} />
  }
}
```

## License

MIT © [Dineshraj Gunasekaran](https://github.com/Dineshraj Gunasekaran)

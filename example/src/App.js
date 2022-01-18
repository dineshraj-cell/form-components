import React from 'react'
import ButtonComponent from 'hamoc-react-form'
import 'hamoc-react-form/dist/index.css'

const onButtonClicked = () => {
  console.log('clicked')
}

const App = () => {
  return <ButtonComponent text='Submit' handleClick={onButtonClicked} />
}

export default App

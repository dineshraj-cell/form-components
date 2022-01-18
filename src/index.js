import React from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

const ButtonComponent = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick} className={styles.button_primary}>
      {text}
    </button>
  )
}

ButtonComponent.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func
}

export default ButtonComponent

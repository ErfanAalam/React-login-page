import React from 'react'
import styles from './InputControl.module.css'

function InputControl(props) {
  return (
    <div className={styles.container}>
        {props.label && <lable>{props.label}</lable>}
        <input type="text" name="" id="" {...props} />
      
    </div>
  )
}

export default InputControl

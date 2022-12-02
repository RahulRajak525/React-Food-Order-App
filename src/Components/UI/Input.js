import React from 'react'
import classes from './Input.module.css'

const Input = props => {
  return (
    <div className={classes.input} >
      <lebel htmlFor={props.input.id} >{props.label}</lebel>
       <input id={props.input.id} {...props.input} />
    </div>
  )
}

export default Input

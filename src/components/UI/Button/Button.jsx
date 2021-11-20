import React from 'react'
import style from './Button.module.scss'
import classNames from 'classnames'

const Button = ({ text, className, ...rest }) => {
  const styles = classNames({ [style.button]: true, [className]: true })
  return <button className={styles} {...rest}>{text}</button>
}

export default Button

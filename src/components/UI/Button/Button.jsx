import React from 'react'
import style from './Button.module.scss'
import classNames from 'classnames'

const Button = ({ text, className }) => {
  const styles = classNames({ [style.button]: true, [className]: true })
  return <button className={styles}>{text}</button>
}

export default Button

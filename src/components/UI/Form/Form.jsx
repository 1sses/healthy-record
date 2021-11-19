import React from 'react'
import style from './Form.module.scss'
import classNames from 'classnames'

const Form = ({ header, className, children }) => {
  const styles = classNames({ [style.form]: true, [className]: true })
  return (
    <form className={styles}>
      <h2 className={style.header}>{header}</h2>
      {children}
    </form>
  )
}

export default Form

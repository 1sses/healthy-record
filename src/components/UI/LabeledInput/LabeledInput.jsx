import React from 'react'
import style from './LabeledInput.module.scss'
import classNames from 'classnames'

const LabeledInput = ({ title, measure, len, pattern, className, ...rest }) => {
  const styles = classNames({ [style.wrapper]: true, [className]: true })
  return (
    <label className={styles}>
      <span>{title}:</span>
      <span>
        <input
          autoComplete="off"
          pattern={pattern}
          maxLength={len}
          {...rest}
        />
        {measure}
      </span>
    </label>
  )
}

export default LabeledInput

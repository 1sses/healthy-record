import React, { useState } from 'react'
import style from './Password.module.scss'
import Input from '../Input'

const Password = ({ value, changeValue, placeholder, eyeStyle, ...rest }) => {
  const [hidden, setHidden] = useState(true)
  const switchHidden = () => setHidden(!hidden)
  return (
    <div className={style.wrapper}>
      <Input type={hidden ? 'password' : 'text'} placeholder={placeholder} value={value} onChange={changeValue} {...rest} />
      {hidden
        ? <i className={`far fa-eye ${eyeStyle}`} onClick={switchHidden} />
        : <i className={`far fa-eye-slash ${eyeStyle}`} onClick={switchHidden} />}
    </div>
  )
}

export default Password

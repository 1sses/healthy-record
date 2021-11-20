import React, { useState } from 'react'
import style from './Account.module.scss'
import Form from '../../UI/Form/Form'
import Input from '../../UI/Input'
import Password from '../../UI/Password'
import UserWindow from './UserWindow/UserWindow'

const Account = () => {
  const [authTypeLogin, setAuthTypeLogin] = useState(true)

  const switchAuth = () => setAuthTypeLogin(!authTypeLogin)

  return (
    <section className={style.wrapper}>
      <h1>Персональный аккаунт</h1>
      <div className={style.window}>
        <UserWindow />
        {authTypeLogin
          ? <Form header="Авторизация">
            <Input type="text" placeholder="Логин" required />
            <Password placeholder="Пароль" required />
            <button className={style.submit}>Войти</button>
          </Form>
          : <Form header="Регистрация">
            <Input type="text" placeholder="Логин" name="login" />
            <Password placeholder="Пароль" name="password" required />
            <button className={style.submit}>Зарегистрироваться</button>
          </Form>}
        <button className={`${style.btn} ${style.switcher}`} title="Переключиться" style={{ alignSelf: 'flex-start' }} onClick={switchAuth}>
          <i className="fas fa-chevron-left" /></button>
      </div>
    </section>
  )
}

export default Account

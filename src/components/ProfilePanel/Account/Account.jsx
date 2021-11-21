import React, { useContext, useEffect, useState } from 'react'
import style from './Account.module.scss'
import Form from '../../UI/Form/Form'
import Input from '../../UI/Input'
import Password from '../../UI/Password'
import UserWindow from './UserWindow/UserWindow'
import useInput from '../../../hooks/useInput'
import serverConfig from '../../../api/server.config'
import axios from 'axios'
import SyncContext from '../../../context/sync'
import DataContext from '../../../context/data'

const Account = () => {
  const [authTypeLogin, setAuthTypeLogin] = useState(true)
  const [login, setLogin] = useInput('')
  const [password, setPassword] = useInput('')
  const [publicLogin, setPublicLogin] = useState('Вход не выполнен')

  const switchAuth = () => setAuthTypeLogin(!authTypeLogin)
  const server = useContext(SyncContext)
  const { setBodyData, setProportions, setOtherData } = useContext(DataContext)

  const initSuccess = (res) => {
    setPublicLogin(res.login)
    setBodyData(JSON.parse(res.bodyData))
    localStorage.setItem('bodyData', res.bodyData)
    setProportions(JSON.parse(res.proportions))
    localStorage.setItem('proportions', res.proportions)
    setOtherData(JSON.parse(res.otherData))
    localStorage.setItem('otherData', res.otherData)
    server.setStatus('не требуется')
    server.setColor('green')
  }

  useEffect(async () => {
    const config = {
      method: 'get',
      url: serverConfig.validateURL,
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      }
    }
    const response = await axios(config)
    if (!response.data.error) {
      initSuccess(response.data)
    }
  }, [])

  const registerUser = async (e) => {
    e.preventDefault()
    const response = await axios.post(serverConfig.registrationURL, {
      login,
      password
    })
    if (!response.data.error) {
      setPublicLogin(response.data.login)
      server.setStatus('не требуется')
      server.setColor('green')
      alert(response.data.message)
    } else {
      alert(response.data.error)
    }
  }
  const loginUser = async (e) => {
    e.preventDefault()
    const config = {
      method: 'post',
      url: serverConfig.loginURL,
      data: { login, password },
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      }
    }
    const response = await axios(config)
    if (!response.data.error) {
      initSuccess(response.data)
      alert(response.data.message)
    } else {
      alert(response.data.error)
    }
  }

  return (
    <section className={style.wrapper}>
      <h1>Персональный аккаунт</h1>
      <div className={style.window}>
        <UserWindow login={publicLogin} />
        {authTypeLogin
          ? <Form header="Авторизация" className={style.form}>
            <Input type="text" placeholder="Логин" required onChange={setLogin} />
            <Password placeholder="Пароль" required eyeStyle={style.pass} onChange={setPassword} />
            <button className={style.submit} onClick={loginUser}>Войти</button>
          </Form>
          : <Form header="Регистрация" className={style.form}>
            <Input type="text" placeholder="Логин" onChange={setLogin} />
            <Password placeholder="Пароль" required eyeStyle={style.pass} onChange={setPassword} />
            <button className={style.submit} onClick={registerUser}>Зарегистрироваться</button>
          </Form>}
        <button className={`${style.btn} ${style.switcher}`} title="Переключиться" style={{ alignSelf: 'flex-start' }} onClick={switchAuth}>
          <i className="fas fa-chevron-left" /></button>
      </div>
    </section>
  )
}

export default Account

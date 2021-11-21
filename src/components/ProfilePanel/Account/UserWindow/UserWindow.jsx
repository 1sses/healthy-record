import React, { useContext, useRef, useState } from 'react'
import style from './UserWindow.module.scss'
import DataContext from '../../../../context/data'
import classNames from 'classnames'
import SyncContext from '../../../../context/sync'
import { JSON } from 'sequelize'

const UserWindow = ({ login }) => {
  const anchor = useRef()
  const file = useRef()

  const { bodyData, setBodyData, proportions, setProportions, otherData, setOtherData } = useContext(DataContext)
  const server = useContext(SyncContext)

  const [updating, setUpdating] = useState(false)
  const synchronize = async () => {
    if (server.status === 'не выполнена') {
      alert('Войдите, чтобы синхронизировать данные!')
      return
    }
    setUpdating(true)
    await server.sync(JSON.stringify(bodyData), JSON.stringify(proportions), JSON.stringify(otherData))
    setUpdating(false)
  }

  const download = () => {
    const file = new Blob([JSON.stringify({
      bodyData,
      proportions,
      otherData
    }, null, 2)], { type: 'application/json' })
    anchor.current.href = URL.createObjectURL(file)
    anchor.current.download = 'data.json'
    anchor.current.click()
  }

  const upload = () => {
    file.current.click()
  }
  const fileReading = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsText(file, 'utf-8')
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result)
        if (confirm('Файл готов к загрузке. Вы действительно хотите заменить данные?')) {
          setBodyData(data.bodyData)
          setProportions(data.proportions)
          setOtherData(data.otherData)
          localStorage.setItem('bodyData', JSON.stringify(data.bodyData))
          localStorage.setItem('proportions', JSON.stringify(data.proportions))
          localStorage.setItem('otherData', JSON.stringify(data.otherData))
        }
      } catch (error) {
        alert('Ошибка чтения файла!')
      }
    }
  }

  const reset = () => {
    if (confirm('Вы действительно хотите удалить все данные приложения?')) {
      setBodyData({})
      setProportions({})
      setOtherData({ sex: 'М', height: 0, age: 0 })
      localStorage.setItem('bodyData', JSON.stringify({}))
      localStorage.setItem('proportions', JSON.stringify({}))
      localStorage.setItem('otherData', JSON.stringify({ sex: 'М', height: 0, age: 0 }))
    }
  }

  const syncStyles = classNames({ [style.btn]: true, [style.sync]: true, [style.animation]: updating })

  return (
    <div className={style.wrapper}>
      <div>
        <h2>Пользователь:</h2>
        <p>Логин: {login}</p>
        <div className={style.synchronize}>
          <p>Синхронизация: <span style={{ color: server.color }}>{server.status}</span></p>
          <button className={syncStyles} title="Синхронизировать" onClick={synchronize}><i className="fas fa-sync-alt" /></button>
        </div>
      </div>
      <div className={style.controllers}>
        <button className={style.btn} title="Скачать данные" onClick={download}>
          <i className="fas fa-download"/></button>
        <button className={style.btn} title="Загрузить данные" onClick={upload}>
          <i className="fas fa-upload"/>
        </button>
        <button className={style.btn} title="Сбросить данные" onClick={reset}>
          <i className="far fa-trash-alt"/>
        </button>
      </div>
      <input type="file" ref={file} style={{ display: 'none' }} onChange={fileReading} />
      <a href="" ref={anchor} style={{ display: 'none' }} />
    </div>
  )
}

export default UserWindow

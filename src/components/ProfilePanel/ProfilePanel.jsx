import React from 'react'
import style from './ProfilePanel.module.scss'

const ProfilePanel = () => {
  return (
    <div className={style.wrapper}>
      <button className={style.account} title="Аккаунт" id="account-button"><i className="far fa-address-card" /></button>
      <button className={style.info} title="Информация" id="info-button"><i className="fas fa-bars" /></button>
    </div>
  )
}

export default ProfilePanel

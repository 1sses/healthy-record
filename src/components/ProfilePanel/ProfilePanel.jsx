import React from 'react'
import style from './ProfilePanel.module.scss'

const ProfilePanel = () => {
  return (
    <div>
      <button className="account" title="Аккаунт" id="account-button"><i className="gg-user" /></button>
      <button className="app-info" title="Информация" id="info-button"><i className="gg-menu-round" /></button>
    </div>
  )
}

export default ProfilePanel

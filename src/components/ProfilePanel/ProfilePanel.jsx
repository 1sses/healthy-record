import React, { useContext, useEffect, useState } from 'react'
import style from './ProfilePanel.module.scss'
import Modal from '../../Modal'
import Account from './Account/Account'
import Info from './Info/Info'
import Tables from './Tables/Tables'
import Button from '../UI/Button/Button'
import SyncContext from '../../context/sync'
import DataContext from '../../context/data'

const ProfilePanel = () => {
  const [modal, setModal] = useState(false)
  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)
  const [modalContent, setModalContent] = useState('profile')

  const server = useContext(SyncContext)
  const { bodyData, proportions, otherData } = useContext(DataContext)

  useEffect(() => {
    if (server.status !== 'не выполнена') {
      server.setStatus('требуется')
      server.setColor('gold')
    }
  }, [bodyData, proportions, otherData])

  const accountClick = () => {
    setModalContent('profile')
    openModal()
  }
  const infoClick = () => {
    setModalContent('info')
    openModal()
  }

  const switchInfo = () => {
    if (modalContent === 'info') setModalContent('tables')
    else setModalContent('info')
  }

  return (
    <>
      <Modal visible={modal} setVisible={setModal}>
        {modalContent === 'profile'
          ? <Account />
          : <article>
            <button className={`${style.btn} ${style.switcher}`} title="Переключиться" onClick={switchInfo}>
              <i className="fas fa-chevron-left"/></button>
            {modalContent === 'info' ? <Info /> : <Tables />}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button text="Закрыть" onClick={closeModal} className={style.close} />
            </div>
          </article>}
      </Modal>
      <div className={style.wrapper}>
      <button className={`${style.account} ${style[server.color]}`} title="Аккаунт" onClick={accountClick}><i className="far fa-address-card" /></button>
      <button className={style.info} title="Информация" onClick={infoClick}><i className="fas fa-bars" /></button>
    </div>
    </>
  )
}

export default ProfilePanel

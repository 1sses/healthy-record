import React from 'react'
import './App.scss'
import ProfilePanel from '../components/ProfilePanel/ProfilePanel'

const App = () => {
  return (
    <main>
      <header className="header">
        <h1><em>Healthy Record</em> - учет характеристик организма</h1>
        <ProfilePanel />
      </header>
    </main>
  )
}

export default App

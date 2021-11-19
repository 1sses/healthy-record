import React from 'react'
import './App.scss'
import ProfilePanel from '../components/ProfilePanel/ProfilePanel'
import BodyDataContainer from '../components/BodyDataContainer/BodyDataContainer'
import ProportionsContainer from '../components/ProportionsContainer/ProportionsContainer'

const App = () => {
  return (
    <main>
      <header className="header">
        <h1><em>Healthy Record</em> - учет характеристик организма</h1>
        <ProfilePanel />
      </header>
      <BodyDataContainer />
      <ProportionsContainer />
    </main>
  )
}

export default App

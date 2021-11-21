import React, { useState } from 'react'
import './App.scss'
import ProfilePanel from '../components/ProfilePanel/ProfilePanel'
import BodyDataContainer from '../components/BodyDataContainer/BodyDataContainer'
import ProportionsContainer from '../components/ProportionsContainer/ProportionsContainer'
import DataContext from '../context/data'
import SyncContext from '../context/sync'
import useSync from '../hooks/useSync'

const App = () => {
  const [bodyData, setBodyData] = useState(JSON.parse(localStorage.getItem('bodyData')) ?? {})
  const [proportions, setProportions] = useState(JSON.parse(localStorage.getItem('proportions')) ?? {})
  const [otherData, setOtherData] = useState(JSON.parse(localStorage.getItem('otherData')) ?? {
    sex: 'М',
    height: 0,
    age: 0
  })

  return (
    <DataContext.Provider value={{
      bodyData,
      setBodyData,
      proportions,
      setProportions,
      otherData,
      setOtherData
    }}>
      <SyncContext.Provider value={useSync()}>
        <main>
          <header className="header">
            <h1><em>Healthy Record</em> - учет характеристик организма</h1>
            <ProfilePanel/>
          </header>
          <BodyDataContainer/>
          {otherData.sex === 'М' && <ProportionsContainer/>}
        </main>
      </SyncContext.Provider>
    </DataContext.Provider>

  )
}

export default App

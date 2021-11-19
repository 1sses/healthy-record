import React, { useEffect, useState } from 'react'
import './App.scss'
import ProfilePanel from '../components/ProfilePanel/ProfilePanel'
import BodyDataContainer from '../components/BodyDataContainer/BodyDataContainer'
import ProportionsContainer from '../components/ProportionsContainer/ProportionsContainer'
import DataContext from '../context/data'

const App = () => {
  const [bodyData, setBodyData] = useState({})
  const [proportions, setProportions] = useState({})
  const [otherData, setOtherData] = useState({
    sex: '',
    height: 0,
    age: 0
  })
  useEffect(() => {
    setBodyData(JSON.parse(localStorage.getItem('bodyData')) ?? {})
    setProportions(JSON.parse(localStorage.getItem('proportions')) ?? {})
    setOtherData(JSON.parse(localStorage.getItem('otherData')) ?? {})
  }, [])
  return (
    <DataContext.Provider value={{
      bodyData,
      setBodyData,
      proportions,
      setProportions,
      otherData,
      setOtherData
    }}>
      <main>
        <header className="header">
          <h1><em>Healthy Record</em> - учет характеристик организма</h1>
          <ProfilePanel />
        </header>
        <BodyDataContainer />
        <ProportionsContainer />
      </main>
    </DataContext.Provider>
  )
}

export default App

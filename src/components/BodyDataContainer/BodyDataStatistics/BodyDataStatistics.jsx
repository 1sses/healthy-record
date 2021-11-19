import React, { useContext, useEffect, useState } from 'react'
import style from './BodyDataStatistics.module.scss'
import LabeledInput from '../../UI/LabeledInput/LabeledInput'
import DataContext from '../../../context/data'
import getAgeWord from '../../../utils/getAgeWord'
import updateBodyData from '../../../utils/updateBodyData'

const BodyDataStatistics = () => {
  const { bodyData, otherData, setOtherData } = useContext(DataContext)

  const [stats, setStats] = useState({
    bmiText: '',
    bmiColor: '',
    optimalWeight: '',
    fatText: '',
    fatColor: '',
    waterText: '',
    waterColor: '',
    muscleText: '',
    muscleColor: ''
  })

  const [sex, setSex] = useState('')
  const switchSex = () => {
    setOtherData({
      ...otherData,
      sex: sex === 'М' ? 'Ж' : 'М'
    })
  }
  const [height, setHeight] = useState(0)
  const heightHandler = (e) => {
    let currentHeight = +e.target.value
    if (currentHeight > 300) currentHeight = 300
    if (currentHeight < 0) currentHeight = 0
    setOtherData({
      ...otherData,
      height: currentHeight
    })
  }
  const [age, setAge] = useState(0)
  const ageHandler = (e) => {
    let currentAge = +e.target.value
    if (currentAge > 100) currentAge = 100
    if (currentAge < 0) currentAge = 0
    setOtherData({
      ...otherData,
      age: currentAge
    })
  }

  useEffect(() => {
    setSex(otherData.sex)
    setHeight(otherData.height)
    setAge(otherData.age)
    localStorage.setItem('otherData', JSON.stringify(otherData))
  }, [otherData])

  useEffect(() => {
    const latest = bodyData[Object.keys(bodyData).pop()]
    setStats(updateBodyData(latest, sex, height, age))
    // todo check proportions colors update
    // getProportionsColors()
  }, [bodyData, sex, height, age])

  return (
    <div className={style.wrapper}>
      <div className={style.lastDataAligner}>
        <div className={style.otherDataInputs}>
          <label>
            Пол:
            <button className={style.rounded} onClick={switchSex}>{sex}</button>
          </label>
          <LabeledInput title="Рост" type="number" measure=" см" value={height} onChange={heightHandler} />
          <LabeledInput title="Возраст" type="number" measure={` ${getAgeWord(age)}`} value={age} onChange={ageHandler} />
        </div>
        <div className={style.lastBodyData}>
          <p>Вес: <strong>{76} кг</strong></p>
          <p>Жировая ткань: <strong>{20.7}%</strong></p>
          <p>Содержание воды: <strong>{58}%</strong></p>
          <p>Мышечная ткань: <strong>{35}%</strong></p>
        </div>
      </div>
      <div className={style.lastDataAligner}>
        <p className={stats.bmiColor}>{stats.bmiText}</p>
        <p className={stats.bmiColor}>{stats.optimalWeight}</p>
        <p className={stats.fatColor}>{stats.fatText}</p>
        <p className={stats.waterColor}>{stats.waterText}</p>
        <p className={stats.muscleColor}>{stats.muscleText}</p>
      </div>
    </div>
  )
}

export default BodyDataStatistics

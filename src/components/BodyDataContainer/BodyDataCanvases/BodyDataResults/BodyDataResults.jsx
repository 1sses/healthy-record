import React, { useContext, useEffect, useState } from 'react'
import style from './BodyDataResults.module.scss'
import DataContext from '../../../../context/data'
import toMs from '../../../../utils/toMs'

const BodyDataResults = () => {
  const { bodyData } = useContext(DataContext)

  const [fromDate, setFromDate] = useState('')
  const fromHandler = (e) => setFromDate(e.target.value)
  const [toDate, setToDate] = useState('')
  const toHandler = (e) => setToDate(e.target.value)
  const [content, setContent] = useState(false)

  const [weight, setWeight] = useState('')
  const [fat, setFat] = useState('')
  const [water, setWater] = useState('')
  const [muscle, setMuscle] = useState('')

  const insertDates = (from, to) => {
    const dates = Object.keys(bodyData)
    setFromDate((from ?? dates.at(0) ?? '').split('.').reverse().join('-'))
    setToDate((to ?? dates.at(-1) ?? '').split('.').reverse().join('-'))
  }

  useEffect(() => {
    if (Object.keys(bodyData).length === 0 || !fromDate || !toDate) {
      setContent(false)
      return
    }
    const dates = [fromDate, toDate].map(item => item.split('-').reverse().join('.'))
    if (!dates[0] && !dates[1]) return
    if (toMs(dates[0]) > toMs(dates[1])) {
      alert('Невозможно корректно вычислить данные, введите корректные промежутки!')
      setContent(false)
      insertDates('', '')
      return
    }
    let from = { date: dates[0], value: bodyData[dates[0]] }
    if (!from.value) {
      const diffs = Object.keys(bodyData).map(item => ({
        date: item,
        value: toMs(item) - toMs(dates[0])
      })).filter(item => item.value > 0)
      from = { date: diffs[0].date, value: bodyData[diffs[0].date] }
    }
    let to = { date: dates[1], value: bodyData[dates[1]] }
    if (!to.value) {
      const diffs = Object.keys(bodyData).map(item => ({
        date: item,
        value: toMs(item) - toMs(dates[1])
      })).filter(item => item.value < 0)
      to = { date: diffs.at(-1).date, value: bodyData[diffs.at(-1).date] }
    }
    if (toMs(from.date) > toMs(to.date)) {
      alert('Невозможно корректно вычислить данные, введите корректные промежутки')
      insertDates('', '')
      return
    }
    insertDates(from.date, to.date)
    const weight = to.value.weight - from.value.weight
    const fat = to.value.fat * to.value.weight / 100 - from.value.fat * from.value.weight / 100
    const water = to.value.water * to.value.weight / 100 - from.value.water * from.value.weight / 100
    const muscles = to.value.muscles * to.value.weight / 100 - from.value.muscles * from.value.weight / 100
    setContent(true)
    setWeight(`${weight > 0 ? 'набрано' : 'сброшено'} ${Math.abs(+weight.toFixed(1))}`)
    setFat(`${fat > 0 ? 'набрано' : 'потеряно'} ${Math.abs(+fat.toFixed(1))}`)
    setWater(`${water > 0 ? 'набрано' : 'потеряно'} ${Math.abs(+water.toFixed(1))}`)
    setMuscle(`${muscles > 0 ? 'набрано' : 'потеряно'} ${Math.abs(+muscles.toFixed(1))}`)
  }, [bodyData, fromDate, toDate])

  return (
    <div className={style.wrapper}>
      <h2>Отчет по результатам за период</h2>
      <div className={style.inputs}>
        <label>
          От: <input type="date" value={fromDate} onChange={fromHandler} />
        </label>
        <label>
          До: <input type="date" value={toDate} onChange={toHandler} />
        </label>
      </div>
      {content
        ? <div>
        <p>За данный период было <strong>{weight} кг</strong></p>
        <p>За данный период было <strong>{fat} кг жировой ткани</strong></p>
        <p>За данный период было <strong>{water} л воды</strong></p>
        <p>За данный период было <strong>{muscle} кг мышечной массы</strong></p>
      </div>
        : <div>
        <p>Невозможно определить данные</p>
        <p>Невозможно определить данные</p>
        <p>Невозможно определить данные</p>
        <p>Невозможно определить данные</p>
      </div>}

    </div>
  )
}

export default BodyDataResults

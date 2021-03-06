import React, { useContext, useEffect, useState } from 'react'
import style from './ProportionsCanvases.module.scss'
import { Line } from 'react-chartjs-2'
import generateOptions from '../../../utils/generateOptions'
import deleteData from '../../../utils/deleteData'
import findInRange from '../../../utils/findInRange'
import DataContext from '../../../context/data'

const colors = ['deepskyblue', 'limegreen', 'orange']
const koefArr = [0.34, 0.36, 0.39, 0.42, 0.44, 0.47, 0.5, 0.53, 0.57, 0.6]
const idealProportions = {
  0.34: {
    neck: 35.6,
    biceps: 33.3,
    forearm: 27.7,
    chest: 92.5,
    waist: 69.3,
    pelvis: 83.3,
    hip: 50,
    lowerleg: 33.3
  },
  0.36: {
    neck: 36.8,
    biceps: 34.5,
    forearm: 28.7,
    chest: 96.3,
    waist: 72.1,
    pelvis: 86.6,
    hip: 51.8,
    lowerleg: 34.5
  },
  0.39: {
    neck: 38.1,
    biceps: 35.8,
    forearm: 30,
    chest: 99.8,
    waist: 74.7,
    pelvis: 89.7,
    hip: 53.8,
    lowerleg: 35.8
  },
  0.42: {
    neck: 39.6,
    biceps: 37.1,
    forearm: 31,
    chest: 103.4,
    waist: 76.2,
    pelvis: 93,
    hip: 55.9,
    lowerleg: 37.1
  },
  0.44: {
    neck: 40.9,
    biceps: 38.4,
    forearm: 32,
    chest: 106.9,
    waist: 80.3,
    pelvis: 96.3,
    hip: 57.7,
    lowerleg: 38.4
  },
  0.47: {
    neck: 42.4,
    biceps: 39.9,
    forearm: 33.3,
    chest: 110.5,
    waist: 82.8,
    pelvis: 99.6,
    hip: 59.7,
    lowerleg: 39.9
  },
  0.5: {
    neck: 43.7,
    biceps: 41.1,
    forearm: 34.3,
    chest: 114.3,
    waist: 85.6,
    pelvis: 102.9,
    hip: 61.7,
    lowerleg: 41.1
  },
  0.53: {
    neck: 45.2,
    biceps: 42.4,
    forearm: 35.3,
    chest: 117.9,
    waist: 88.4,
    pelvis: 105.9,
    hip: 63.5,
    lowerleg: 42.4
  },
  0.57: {
    neck: 46.5,
    biceps: 43.9,
    forearm: 36.6,
    chest: 121.9,
    waist: 91.4,
    pelvis: 109.7,
    hip: 65.8,
    lowerleg: 43.9
  },
  0.6: {
    neck: 47.8,
    biceps: 45.2,
    forearm: 37.6,
    chest: 125.5,
    waist: 94.2,
    pelvis: 113,
    hip: 67.8,
    lowerleg: 45.2
  }
}

const ProportionsCanvases = () => {
  const { bodyData, proportions, setProportions, otherData } = useContext(DataContext)

  const [clickedIndex, setClickedIndex] = useState(-1)
  const [ideal, setIdeal] = useState({})

  useEffect(() => {
    setIdeal({})
    const data = proportions[Object.keys(proportions).pop()]
    if (!data) return
    const weight = bodyData[Object.keys(bodyData).pop()]?.weight
    if (!weight) return
    const koef = weight / otherData.height
    // closest coefficient
    const diff = koefArr.map(item => Math.abs(item - koef))
    const minIndex = diff.indexOf(Math.min(...diff))
    const ideal = idealProportions[koefArr[minIndex]]
    setIdeal(ideal)
  }, [proportions, bodyData, otherData])

  const generateData = (color, type) => ({
    labels: Object.keys(proportions),
    datasets: [{
      data: Object.keys(proportions).map(item => proportions[item][type]),
      hitRadius: 5,
      pointBackgroundColor: color,
      borderColor: color,
      borderWidth: 3
    }]
  })

  const chartClick = (data) => {
    const index = data[0]?.index
    if (data.length) {
      setClickedIndex(index)
      setTimeout(() => setClickedIndex(-1), 500)
    }
    if (index === clickedIndex) {
      const newData = deleteData(Object.keys(proportions)[index], proportions)
      setProportions(newData)
      localStorage.setItem('proportions', JSON.stringify(newData))
    }
  }

  const getColor = (diff, target) => {
    const data = proportions[Object.keys(proportions).pop()]
    if (!data || !(target in ideal)) return 'rgba(255, 99, 132, 1)'
    return findInRange(data[target], [ideal[target] - diff, ideal[target] + diff], colors)
  }

  const getSubtitle = (title, diff, target) => {
    const data = proportions[Object.keys(proportions).pop()]
    if (!data || !(target in ideal)) return ''
    return `?????????????????? ???????????? ${title}: ${ideal[target]}??${diff} ????`
  }

  return (
    <>
      <div className={style.wideContainer}>
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData(getColor(1.5, 'biceps'), 'biceps')}
          options={generateOptions('????????????, ????', ' ????', getSubtitle('??????????????', 1.5, 'biceps'))}
        />
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData(getColor(3, 'waist'), 'waist')}
          options={generateOptions('??????????, ????', ' ????', getSubtitle('??????????', 3, 'waist'))}
        />
      </div>
      <div className={style.smallContainer}>
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData(getColor(1.5, 'neck'), 'neck')}
          options={generateOptions('??????, ????', ' ????', getSubtitle('??????', 1.5, 'neck'))}
        />
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData(getColor(1, 'forearm'), 'forearm')}
          options={generateOptions('????????????????????, ????', ' ????', getSubtitle('????????????????????', 1, 'forearm'))}
        />
      </div>
      <div className={style.smallContainer}>
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData(getColor(4, 'chest'), 'chest')}
          options={generateOptions('??????????, ????', ' ????', getSubtitle('??????????', 4, 'chest'))}
        />
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData(getColor(3, 'pelvis'), 'pelvis')}
          options={generateOptions('??????, ????', ' ????', getSubtitle('????????', 3, 'pelvis'))}
        />
      </div>
      <div className={style.smallContainer}>
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData(getColor(2, 'hip'), 'hip')}
          options={generateOptions('??????????, ????', ' ????', getSubtitle('??????????', 2, 'hip'))}
        />
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData(getColor(1.5, 'lowerleg'), 'lowerleg')}
          options={generateOptions('????????????, ????', ' ????', getSubtitle('????????????', 1.5, 'lowerleg'))}
        />
      </div>
    </>
  )
}

export default ProportionsCanvases

import React, { useContext, useState } from 'react'
import { Line } from 'react-chartjs-2'
import style from './BodyDataCanvases.module.scss'
import BodyDataResults from './BodyDataResults/BodyDataResults'
import DataContext from '../../../context/data'
import generateOptions from '../../../utils/generateOptions'
import deleteData from '../../../utils/deleteData'

const BodyDataCanvases = () => {
  const { bodyData, setBodyData } = useContext(DataContext)

  const [clickedIndex, setClickedIndex] = useState(-1)

  const generateData = (color, type) => ({
    labels: Object.keys(bodyData),
    datasets: [{
      data: Object.keys(bodyData).map(item => bodyData[item][type]),
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
      const newData = deleteData(Object.keys(bodyData)[index], bodyData)
      setBodyData(newData)
      localStorage.setItem('bodyData', JSON.stringify(newData))
    }
  }

  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData('#55E9BC', 'weight')} options={generateOptions('Вес, кг', ' кг')}
        />
        <BodyDataResults />
      </div>
      <div className={style.right}>
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData('rgba(255, 206, 86, 1)', 'fat')} options={generateOptions('Жир, %', '%')}
        />
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData('rgba(54, 162, 235, 1)', 'water')} options={generateOptions('Вода, %', '%')}
        />
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData('tomato', 'muscles')} options={generateOptions('Мышцы, %', '%')}
        />
      </div>
    </div>
  )
}

export default BodyDataCanvases

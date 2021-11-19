import React from 'react'
import { Line } from 'react-chartjs-2'
import style from './BodyDataCanvases.module.scss'
import BodyDataResults from './BodyDataResults/BodyDataResults'

const BodyDataCanvases = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <Line data={{ datasets: [] }} options={{}} /> { /* weight */ }
        <BodyDataResults />
      </div>
      <div className="right-container">
        <Line data={{ datasets: [] }} options={{}} /> { /* fat */ }
        <Line data={{ datasets: [] }} options={{}} /> { /* water */ }
        <Line data={{ datasets: [] }} options={{}} /> { /* muscle */ }
      </div>
    </div>
  )
}

export default BodyDataCanvases

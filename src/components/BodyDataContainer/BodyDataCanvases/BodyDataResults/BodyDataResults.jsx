import React from 'react'
import style from './BodyDataResults.module.scss'

const BodyDataResults = () => {
  return (
    <div className={style.wrapper}>
      <h2>Отчет по результатам за период</h2>
      <div className={style.inputs}>
        <label>
          От: <input type="date" />
        </label>
        <label>
          До: <input type="date" />
        </label>
      </div>
      <div>
        <p>За данный период было <strong>сброшено 0 кг</strong></p>
        <p>За данный период было <strong>сброшено 0 кг жировой ткани</strong></p>
        <p>За данный период было <strong>потеряно 0 л воды</strong></p>
        <p>За данный период было <strong>набрано 0 кг мышечной массы</strong></p>
      </div>
    </div>
  )
}

export default BodyDataResults

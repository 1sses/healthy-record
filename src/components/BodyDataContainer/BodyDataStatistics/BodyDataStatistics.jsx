import React from 'react'
import style from './BodyDataStatistics.module.scss'
import LabeledInput from '../../UI/LabeledInput/LabeledInput'

const BodyDataStatistics = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.lastDataAligner}>
        <div className={style.otherDataInputs}>
          <label>
            Пол:
            <button id="sex" className={style.rounded}>M</button>
          </label>
          <LabeledInput title="Рост" type="number" measure=" см" />
          <LabeledInput title="Возраст" type="number" measure=" лет" />
        </div>
        <div className={style.lastBodyData}>
          <p>Вес: <strong>{76} кг</strong></p>
          <p>Жировая ткань: <strong>{20.7}%</strong></p>
          <p>Содержание воды: <strong>{58}%</strong></p>
          <p>Мышечная ткань: <strong>{35}%</strong></p>
        </div>
      </div>
      <div className={style.lastDataAligner}>
        <p>dyjfyujdfgzsdgf</p>
        <p>ewcrergertgertcref</p>
        <p>awerwevwetesrgvsefg</p>
        <p>dfgaetaerdxfgsdfggfdbx</p>
        <p>fghfghdfgsdrgrffghdxfg</p>
      </div>
    </div>
  )
}

export default BodyDataStatistics

import React from 'react'
import Form from '../UI/Form/Form'
import LabeledInput from '../UI/LabeledInput/LabeledInput'
import style from './ProportionsContainer.module.scss'
import Button from '../UI/Button/Button'
import { Line } from 'react-chartjs-2'

const ProportionsContainer = () => {
  return (
    <section className={style.wrapper}>
      <Form header="Пропорции тела">
        <div style={{ width: '14rem' }}>
          <LabeledInput
            title="Дата" pattern="[0-3][0-9]\.[0-1][1-9]" len="5" required type="date" className={style.calendar}
          />
          <LabeledInput title="Шея" pattern="\d{2}((\.|,)\d)?" len="4" measure=" см" required />
          <LabeledInput title="Бицепс" pattern="\d{2}((\.|,)\d)?" len="4" measure=" см" required />
          <LabeledInput title="Предплечье" pattern="\d{2}((\.|,)\d)?" len="4" measure=" см" required />
          <LabeledInput title="Грудь" pattern="\d{2,3}((\.|,)\d)?" len="5" measure=" см" required />
          <LabeledInput title="Талия" pattern="\d{2,3}((\.|,)\d)?" len="5" measure=" см" required />
          <LabeledInput title="Таз" pattern="\d{2,3}((\.|,)\d)?" len="5" measure=" см" required />
          <LabeledInput title="Бедро" pattern="\d{2}((\.|,)\d)?" len="4" measure=" см" required />
          <LabeledInput title="Голень" pattern="\d{2}((\.|,)\d)?" len="4" measure=" см" required />
          <Button text="Ввести" />
        </div>
      </Form>
      <div className={style.wideContainer}>
        <Line data={{ datasets: [] }} options={{}} /> { /* biceps */ }
        <Line data={{ datasets: [] }} options={{}} /> { /* waist */ }
      </div>
      <div className={style.smallContainer}>
        <Line data={{ datasets: [] }} options={{}} /> { /* neck */ }
        <Line data={{ datasets: [] }} options={{}} /> { /* forearm */ }
      </div>
      <div className={style.smallContainer}>
        <Line data={{ datasets: [] }} options={{}} /> { /* chest */ }
        <Line data={{ datasets: [] }} options={{}} /> { /* pelvis */ }
      </div>
      <div className={style.smallContainer}>
        <Line data={{ datasets: [] }} options={{}} /> { /* hip */ }
        <Line data={{ datasets: [] }} options={{}} /> { /* lowerleg */ }
      </div>
    </section>
  )
}

export default ProportionsContainer

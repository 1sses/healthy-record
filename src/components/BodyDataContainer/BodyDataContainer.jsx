import React from 'react'
import Form from '../UI/Form/Form'
import Button from '../UI/Button/Button'
import LabeledInput from '../UI/LabeledInput/LabeledInput'
import style from './BodyDataContainer.module.scss'

const BodyDataContainer = () => {
  return (
    <section className={style.wrapper}>
      <section className={style.data}>
         <Form header="Введите новые данные">
           <div style={{ width: '14rem' }}>
             <LabeledInput
               title="Дата" pattern="[0-3][0-9]\.[0-1][1-9]" len="5" className={style.calendar} required type="date"
             />
             <LabeledInput title="Вес" pattern="\d{2,3}((\.|,)\d)?" len="5" required measure=" кг" />
             <LabeledInput title="Жир" pattern="\d{1,2}((\.|,)\d)?" len="4" measure=" %" />
             <LabeledInput title="Вода" pattern="\d{2}((\.|,)\d)?" len="4" measure=" %" />
             <LabeledInput title="Мышцы" pattern="\d{2}((\.|,)\d)?" len="4" measure=" %" />
           </div>
          <Button text="Ввести" />
         </Form>
      </section>
    </section>
  )
}

export default BodyDataContainer

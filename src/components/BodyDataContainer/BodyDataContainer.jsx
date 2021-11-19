import React, { useContext, useEffect } from 'react'
import Form from '../UI/Form/Form'
import Button from '../UI/Button/Button'
import LabeledInput from '../UI/LabeledInput/LabeledInput'
import style from './BodyDataContainer.module.scss'
import BodyDataStatistics from './BodyDataStatistics/BodyDataStatistics'
import BodyDataCanvases from './BodyDataCanvases/BodyDataCanvases'
import useInput from '../../hooks/useInput'
import DataContext from '../../context/data'
import sortData from '../../utils/sortData'
import insertCurrentDate from '../../utils/insertCurrentDate'

const BodyDataContainer = () => {
  const { bodyData, setBodyData } = useContext(DataContext)

  const [date, setDate] = useInput('')
  const [weight, setWeight] = useInput('')
  const [fat, setFat] = useInput('')
  const [water, setWater] = useInput('')
  const [muscles, setMuscles] = useInput('')

  useEffect(() => {
    setDate({ target: { value: insertCurrentDate() } })
  }, [bodyData])

  const append = (e) => {
    e.preventDefault()
    const fields = [fat, water, muscles]
    for (const value of fields) {
      if (value === '') {
        if (confirm('Вы ввели не все данные. Приложение будет работать неточно. Вы действительно хотите продолжить?')) break
        else return
      }
    }
    const formattedDate = date.split('-').reverse().join('.')
    if (!(formattedDate in bodyData) || confirm('Данные на такую дату уже есть в базе данных. Хотите перезаписать их?')) {
      bodyData[formattedDate] = {
        weight: +weight.replace(',', '.'),
        fat: +fat.replace(',', '.'),
        water: +water.replace(',', '.'),
        muscles: +muscles.replace(',', '.')
      }
      const sortedData = sortData(bodyData)
      setBodyData(sortedData)
      localStorage.setItem('bodyData', JSON.stringify(sortedData))
      setWeight({ target: { value: '' } })
      setFat({ target: { value: '' } })
      setWater({ target: { value: '' } })
      setMuscles({ target: { value: '' } })
      // todo check appending bodyData
      // insertResultInputsDates()
      // updateResultsInfo()
    }
  }
  return (
    <section className={style.wrapper}>
      <section className={style.data}>
        <Form header="Введите новые данные" onSubmit={append}>
          <div style={{ width: '14rem' }}>
            <LabeledInput
              title="Дата" pattern="[0-3][0-9]\.[0-1][1-9]" len="5" className={style.calendar} required type="date"
                          value={date} onChange={setDate}
            />
            <LabeledInput title="Вес" pattern="\d{2,3}((\.|,)\d)?" len="5" required measure=" кг"
                          value={weight} onChange={setWeight}
            />
            <LabeledInput title="Жир" pattern="\d{1,2}((\.|,)\d)?" len="4" measure=" %"
                          value={fat} onChange={setFat}
            />
            <LabeledInput title="Вода" pattern="\d{2}((\.|,)\d)?" len="4" measure=" %"
                          value={water} onChange={setWater}
            />
            <LabeledInput title="Мышцы" pattern="\d{2}((\.|,)\d)?" len="4" measure=" %"
                          value={muscles} onChange={setMuscles}
            />
          </div>
          <Button text="Ввести" />
        </Form>
        <BodyDataStatistics/>
      </section>
      <BodyDataCanvases/>
    </section>
  )
}

export default BodyDataContainer

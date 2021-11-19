import React, { useContext, useEffect, useState } from 'react'
import Form from '../UI/Form/Form'
import LabeledInput from '../UI/LabeledInput/LabeledInput'
import style from './ProportionsContainer.module.scss'
import Button from '../UI/Button/Button'
import { Line } from 'react-chartjs-2'
import insertCurrentDate from '../../utils/insertCurrentDate'
import useInput from '../../hooks/useInput'
import DataContext from '../../context/data'
import sortData from '../../utils/sortData'
import generateOptions from '../../utils/generateOptions'
import deleteData from '../../utils/deleteData'
import findInRange from '../../utils/findInRange'

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

const ProportionsContainer = () => {
  const { bodyData, proportions, setProportions, otherData } = useContext(DataContext)

  const [clickedIndex, setClickedIndex] = useState(-1)
  const [ideal, setIdeal] = useState({})

  const [date, setDate] = useInput('')
  const [neck, setNeck] = useInput('')
  const [biceps, setBiceps] = useInput('')
  const [forearm, setForearm] = useInput('')
  const [chest, setChest] = useInput('')
  const [waist, setWaist] = useInput('')
  const [pelvis, setPelvis] = useInput('')
  const [hip, setHip] = useInput('')
  const [lowerleg, setLowerleg] = useInput('')

  useEffect(() => {
    setDate({ target: { value: insertCurrentDate() } })
  }, [proportions])

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

  const append = (e) => {
    e.preventDefault()
    const formattedDate = date.split('-').reverse().join('.')
    if (!(formattedDate in proportions) || confirm('Данные на такую дату уже есть в базе данных. Хотите перезаписать их?')) {
      proportions[formattedDate] = {
        neck: +neck.replace(',', '.'),
        biceps: +biceps.replace(',', '.'),
        forearm: +forearm.replace(',', '.'),
        chest: +chest.replace(',', '.'),
        waist: +waist.replace(',', '.'),
        pelvis: +pelvis.replace(',', '.'),
        hip: +hip.replace(',', '.'),
        lowerleg: +lowerleg.replace(',', '.')
      }
      const sortedData = sortData(proportions)
      setProportions(sortedData)
      localStorage.setItem('proportions', JSON.stringify(sortedData))
      setNeck({ target: { value: '' } })
      setBiceps({ target: { value: '' } })
      setForearm({ target: { value: '' } })
      setChest({ target: { value: '' } })
      setWaist({ target: { value: '' } })
      setPelvis({ target: { value: '' } })
      setHip({ target: { value: '' } })
      setLowerleg({ target: { value: '' } })
    }
  }

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
    return `Идеальный обхват ${title}: ${ideal[target]}±${diff} см`
  }

  return (
    <section className={style.wrapper}>
      <Form header="Пропорции тела" onSubmit={append} >
        <div style={{ width: '14rem' }}>
          <LabeledInput
            title="Дата" pattern="[0-3][0-9]\.[0-1][1-9]" len="5" required type="date" className={style.calendar}
                        value={date} onChange={setDate}
          />
          <LabeledInput title="Шея" pattern="\d{2}((\.|,)\d)?" len="4" measure=" см" required
                        value={neck} onChange={setNeck}
          />
          <LabeledInput title="Бицепс" pattern="\d{2}((\.|,)\d)?" len="4" measure=" см" required
                        value={biceps} onChange={setBiceps}
          />
          <LabeledInput title="Предплечье" pattern="\d{2}((\.|,)\d)?" len="4" measure=" см"
                        required value={forearm} onChange={setForearm}
          />
          <LabeledInput title="Грудь" pattern="\d{2,3}((\.|,)\d)?" len="5" measure=" см" required
                        value={chest} onChange={setChest}
          />
          <LabeledInput title="Талия" pattern="\d{2,3}((\.|,)\d)?" len="5" measure=" см" required
                        value={waist} onChange={setWaist}
          />
          <LabeledInput title="Таз" pattern="\d{2,3}((\.|,)\d)?" len="5" measure=" см" required
                        value={pelvis} onChange={setPelvis}
          />
          <LabeledInput title="Бедро" pattern="\d{2}((\.|,)\d)?" len="4" measure=" см" required
                        value={hip} onChange={setHip}
          />
          <LabeledInput title="Голень" pattern="\d{2}((\.|,)\d)?" len="4" measure=" см" required
                        value={lowerleg} onChange={setLowerleg}
          />
          <Button text="Ввести" />
        </div>
      </Form>
      <div className={style.wideContainer}>
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData(getColor(1.5, 'biceps'), 'biceps')}
          options={generateOptions('Бицепс, см', ' см', getSubtitle('бицепса', 1.5, 'biceps'))}
        />
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData(getColor(3, 'waist'), 'waist')}
          options={generateOptions('Талия, см', ' см', getSubtitle('талии', 3, 'waist'))}
        />
      </div>
      <div className={style.smallContainer}>
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData(getColor(1.5, 'neck'), 'neck')}
          options={generateOptions('Шея, см', ' см', getSubtitle('шеи', 1.5, 'neck'))}
        />
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData(getColor(1, 'forearm'), 'forearm')}
          options={generateOptions('Предплечье, см', ' см', getSubtitle('предплечья', 1, 'forearm'))}
        />
      </div>
      <div className={style.smallContainer}>
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData(getColor(4, 'chest'), 'chest')}
          options={generateOptions('Грудь, см', ' см', getSubtitle('груди', 4, 'chest'))}
        />
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData(getColor(3, 'pelvis'), 'pelvis')}
          options={generateOptions('Таз, см', ' см', getSubtitle('таза', 3, 'pelvis'))}
        />
      </div>
      <div className={style.smallContainer}>
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData(getColor(2, 'hip'), 'hip')}
          options={generateOptions('Бедро, см', ' см', getSubtitle('бедра', 2, 'hip'))}
        />
        <Line
          getElementAtEvent={chartClick} type="line"
          data={generateData(getColor(1.5, 'lowerleg'), 'lowerleg')}
          options={generateOptions('Голень, см', ' см', getSubtitle('голени', 1.5, 'lowerleg'))}
        />
      </div>
    </section>
  )
}

export default ProportionsContainer

import React, { useContext, useEffect } from 'react'
import Form from '../UI/Form/Form'
import LabeledInput from '../UI/LabeledInput/LabeledInput'
import style from './ProportionsContainer.module.scss'
import Button from '../UI/Button/Button'
import insertCurrentDate from '../../utils/insertCurrentDate'
import useInput from '../../hooks/useInput'
import DataContext from '../../context/data'
import sortData from '../../utils/sortData'
import ProportionsCanvases from './ProportionsCanvases/ProportionsCanvases'

const ProportionsContainer = () => {
  const { proportions, setProportions } = useContext(DataContext)

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

  return (
    <section className={style.wrapper}>
      <Form header="Пропорции тела" onSubmit={append}>
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
      <ProportionsCanvases />
    </section>
  )
}

export default ProportionsContainer

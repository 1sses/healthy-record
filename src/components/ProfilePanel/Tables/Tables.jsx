import React from 'react'
import style from './Tables.module.scss'

const Tables = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.header}>Рабочие таблицы</h1>
      <h2>Процентное содержание жира в организме человека</h2>
      <table>
        <colgroup>
          <col />
          <col style={{ background: 'rgba(0,191,255,0.75)' }} />
          <col style={{ background: 'rgba(50,205,50,0.75)' }} />
          <col style={{ background: 'rgba(255,165,0,0.75)' }} />
          <col style={{ background: 'rgba(255,0,0,0.75)' }} />
          <col style={{ background: 'rgba(0,191,255,0.75)' }} />
          <col style={{ background: 'rgba(50,205,50,0.7)' }} />
          <col style={{ background: 'rgba(255,165,0,0.75)' }} />
          <col style={{ background: 'rgba(255,0,0,0.75)' }} />
        </colgroup>
        <tbody>
        <tr className={style.sexHeader}>
          <td />
          <td colSpan="4">Мужчины, %</td>
          <td colSpan="4">Женщины, %</td>
        </tr>
        <tr className={style.strong}>
          <td>Возраст</td>
          <td>низкий</td>
          <td>нормальный</td>
          <td>избыточный</td>
          <td>высокий</td>
          <td>низкий</td>
          <td>нормальный</td>
          <td>избыточный</td>
          <td>высокий</td>
        </tr>
        <tr>
          <td>10-14 лет</td>
          <td>&lt;11%</td>
          <td>11-16%</td>
          <td>16-21%</td>
          <td>&gt;21%</td>
          <td>&lt;16%</td>
          <td>16-21%</td>
          <td>21-26%</td>
          <td>&gt;26%</td>
        </tr>
        <tr>
          <td>15-19 лет</td>
          <td>&lt;12%</td>
          <td>12-17%</td>
          <td>17-22%</td>
          <td>&gt;22%</td>
          <td>&lt;17%</td>
          <td>17-22%</td>
          <td>22-27%</td>
          <td>&gt;27%</td>
        </tr>
        <tr>
          <td>20-29 лет</td>
          <td>&lt;13%</td>
          <td>13-18%</td>
          <td>18-23%</td>
          <td>&gt;23%</td>
          <td>&lt;18%</td>
          <td>18-23%</td>
          <td>23-28%</td>
          <td>&gt;28%</td>
        </tr>
        <tr>
          <td>30-39 лет</td>
          <td>&lt;14%</td>
          <td>14-19%</td>
          <td>19-24%</td>
          <td>&gt;24%</td>
          <td>&lt;19%</td>
          <td>19-24%</td>
          <td>24-29%</td>
          <td>&gt;29%</td>
        </tr>
        <tr>
          <td>40-49 лет</td>
          <td>&lt;15%</td>
          <td>15-20%</td>
          <td>20-25%</td>
          <td>&gt;25%</td>
          <td>&lt;20%</td>
          <td>20-25%</td>
          <td>25-30%</td>
          <td>&gt;30%</td>
        </tr>
        <tr>
          <td>50-59 лет</td>
          <td>&lt;16%</td>
          <td>16-21%</td>
          <td>21-26%</td>
          <td>&gt;26%</td>
          <td>&lt;21%</td>
          <td>21-26%</td>
          <td>26-31%</td>
          <td>&gt;31%</td>
        </tr>
        <tr>
          <td>60-69 лет</td>
          <td>&lt;17%</td>
          <td>17-22%</td>
          <td>22-27%</td>
          <td>&gt;27%</td>
          <td>&lt;22%</td>
          <td>22-27%</td>
          <td>27-32%</td>
          <td>&gt;32%</td>
        </tr>
        <tr>
          <td>70+ лет</td>
          <td>&lt;18%</td>
          <td>18-23%</td>
          <td>23-28%</td>
          <td>&gt;28%</td>
          <td>&lt;23%</td>
          <td>23-28%</td>
          <td>28-33%</td>
          <td>&gt;33%</td>
        </tr>
        </tbody>
      </table>
      <h2>Процентное содержание воды в организме человека</h2>
      <table>
        <colgroup>
          <col />
          <col style={{ background: 'rgba(0,191,255,0.75)' }} />
          <col style={{ background: 'rgba(50,205,50,0.75)' }} />
          <col style={{ background: 'rgba(255,165,0,0.75)' }} />
          <col style={{ background: 'rgba(0,191,255,0.75)' }} />
          <col style={{ background: 'rgba(50,205,50,0.7)' }} />
          <col style={{ background: 'rgba(255,165,0,0.75)' }} />
        </colgroup>
        <tbody>
        <tr className={style.sexHeader}>
          <td />
          <td colSpan="3">Мужчины, %</td>
          <td colSpan="3">Женщины, %</td>
        </tr>
        <tr className={style.strong}>
          <td>Возраст</td>
          <td>низкий</td>
          <td>нормальный</td>
          <td>избыточный</td>
          <td>низкий</td>
          <td>нормальный</td>
          <td>избыточный</td>
        </tr>
        <tr>
          <td>6-15 лет</td>
          <td>&lt;58%</td>
          <td>58-72%</td>
          <td>&gt;72%</td>
          <td>&lt;57%</td>
          <td>57-67%</td>
          <td>&gt;67%</td>
        </tr>
        <tr>
          <td>16-30 лет</td>
          <td>&lt;53%</td>
          <td>53-67%</td>
          <td>&gt;67%</td>
          <td>&lt;47%</td>
          <td>47-57%</td>
          <td>&gt;7%</td>
        </tr>
        <tr>
          <td>31-60 лет</td>
          <td>&lt;47%</td>
          <td>47-61%</td>
          <td>&gt;61%</td>
          <td>&lt;42%</td>
          <td>42-52%</td>
          <td>&gt;52%</td>
        </tr>
        <tr>
          <td>60+ лет</td>
          <td>&lt;42%</td>
          <td>42-56%</td>
          <td>&gt;56%</td>
          <td>&lt;37%</td>
          <td>37-47%</td>
          <td>&gt;47%</td>
        </tr>
        </tbody>
      </table>
      <h2>Процентное содержание мышечной ткани в организме человека</h2>
      <table>
        <colgroup>
          <col />
          <col style={{ background: 'rgba(255,0,0,0.75)' }} />
          <col style={{ background: 'rgba(50,205,50,0.75)' }} />
          <col style={{ background: 'rgba(255,165,0,0.75)' }} />
          <col style={{ background: 'rgba(255,0,0,0.75)' }} />
          <col style={{ background: 'rgba(50,205,50,0.7)' }} />
          <col style={{ background: 'rgba(255,165,0,0.75)' }} />
        </colgroup>
        <tbody>
        <tr className={style.sexHeader}>
          <td />
          <td colSpan="3">Мужчины, %</td>
          <td colSpan="3">Женщины, %</td>
        </tr>
        <tr className={style.strong}>
          <td>Возраст</td>
          <td>низкий</td>
          <td>нормальный</td>
          <td>высокий</td>
          <td>низкий</td>
          <td>нормальный</td>
          <td>высокий</td>
        </tr>
        <tr>
          <td>10-14 лет</td>
          <td>&lt;44%</td>
          <td>44-57%</td>
          <td>&gt;57%</td>
          <td>&lt;36%</td>
          <td>36-43%</td>
          <td>&gt;43%</td>
        </tr>
        <tr>
          <td>15-19 лет</td>
          <td>&lt;43%</td>
          <td>43-56%</td>
          <td>&gt;56%</td>
          <td>&lt;35%</td>
          <td>35-41%</td>
          <td>&gt;41%</td>
        </tr>
        <tr>
          <td>20-29 лет</td>
          <td>&lt;42%</td>
          <td>42-54%</td>
          <td>&gt;54%</td>
          <td>&lt;34%</td>
          <td>34-39%</td>
          <td>&gt;39%</td>
        </tr>
        <tr>
          <td>30-39 лет</td>
          <td>&lt;41%</td>
          <td>41-52%</td>
          <td>&gt;52%</td>
          <td>&lt;33%</td>
          <td>33-38%</td>
          <td>&gt;38%</td>
        </tr>
        <tr>
          <td>40-49 лет</td>
          <td>&lt;40%</td>
          <td>40-50%</td>
          <td>&gt;50%</td>
          <td>&lt;31%</td>
          <td>31-36%</td>
          <td>&gt;36%</td>
        </tr>
        <tr>
          <td>50-59 лет</td>
          <td>&lt;39%</td>
          <td>39-48%</td>
          <td>&gt;48%</td>
          <td>&lt;29%</td>
          <td>29-34%</td>
          <td>&gt;34%</td>
        </tr>
        <tr>
          <td>60-69 лет</td>
          <td>&lt;38%</td>
          <td>38-47%</td>
          <td>&gt;47%</td>
          <td>&lt;28%</td>
          <td>28-33%</td>
          <td>&gt;33%</td>
        </tr>
        <tr>
          <td>70+ лет</td>
          <td>&lt;37%</td>
          <td>37-46%</td>
          <td>&gt;46%</td>
          <td>&lt;27%</td>
          <td>27-32%</td>
          <td>&gt;32%</td>
        </tr>
        </tbody>
      </table>
      <h2>Идеальные пропорции мужского тела</h2>
      <table>
        <tbody>
        <tr className={style.sexHeader}>
          <td>Рост / вес</td>
          <td>Шея, см</td>
          <td>Бицепс, см</td>
          <td>Предплечье, см</td>
          <td>Грудь, см</td>
          <td>Талия, см</td>
          <td>Таз, см</td>
          <td>Бедро, см</td>
          <td>Голень, см</td>
        </tr>
        <tr>
          <td>0.34</td>
          <td>35.6</td>
          <td>33.3</td>
          <td>27.7</td>
          <td>92.5</td>
          <td>69.3</td>
          <td>83.3</td>
          <td>50</td>
          <td>33.3</td>
        </tr>
        <tr>
          <td>0.36</td>
          <td>36.8</td>
          <td>34.5</td>
          <td>28.7</td>
          <td>96.3</td>
          <td>72.1</td>
          <td>86.6</td>
          <td>51.8</td>
          <td>34.5</td>
        </tr>
        <tr>
          <td>0.39</td>
          <td>38.1</td>
          <td>35.8</td>
          <td>30</td>
          <td>99.8</td>
          <td>74.7</td>
          <td>89.7</td>
          <td>53.8</td>
          <td>35.8</td>
        </tr>
        <tr>
          <td>0.42</td>
          <td>39.6</td>
          <td>37.1</td>
          <td>31</td>
          <td>103.4</td>
          <td>76.2</td>
          <td>93</td>
          <td>55.9</td>
          <td>37.1</td>
        </tr>
        <tr>
          <td>0.44</td>
          <td>40.9</td>
          <td>38.4</td>
          <td>32</td>
          <td>106.9</td>
          <td>80.3</td>
          <td>96.3</td>
          <td>57.7</td>
          <td>38.4</td>
        </tr>
        <tr>
          <td>0.47</td>
          <td>42.4</td>
          <td>39.9</td>
          <td>33.3</td>
          <td>110.5</td>
          <td>82.8</td>
          <td>99.6</td>
          <td>59.7</td>
          <td>39.9</td>
        </tr>
        <tr>
          <td>0.5</td>
          <td>43.7</td>
          <td>41.1</td>
          <td>34.3</td>
          <td>114.3</td>
          <td>85.6</td>
          <td>102.9</td>
          <td>61.7</td>
          <td>41.1</td>
        </tr>
        <tr>
          <td>0.53</td>
          <td>45.2</td>
          <td>42.4</td>
          <td>35.3</td>
          <td>117.9</td>
          <td>88.4</td>
          <td>105.9</td>
          <td>63.5</td>
          <td>42.4</td>
        </tr>
        <tr>
          <td>0.57</td>
          <td>46.5</td>
          <td>43.9</td>
          <td>36.6</td>
          <td>121.9</td>
          <td>91.4</td>
          <td>109.7</td>
          <td>65.8</td>
          <td>43.9</td>
        </tr>
        <tr>
          <td>0.6</td>
          <td>47.8</td>
          <td>45.2</td>
          <td>37.6</td>
          <td>125.5</td>
          <td>94.2</td>
          <td>113</td>
          <td>67.8</td>
          <td>45.2</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Tables

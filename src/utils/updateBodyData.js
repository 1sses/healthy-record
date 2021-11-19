import findInRange from './findInRange'

export default function updateBodyData (latest, sex, height, age) {
  const weight = latest.weight ?? 0
  const fat = latest.fat ?? 0
  const water = latest.water ?? 0
  const muscle = latest.muscles ?? 0

  const bmi = weight / ((height / 100) ** 2)
  let bmiText, bmiColor
  if (bmi && bmi !== Infinity) {
    if (bmi < 16) (bmiText = 'Сильный дефицит массы тела') && (bmiColor = 'violet')
    else if (bmi >= 16 && bmi < 18.5) (bmiText = 'Недостаточная масса тела') && (bmiColor = 'sky')
    else if (bmi >= 18.5 && bmi < 25) (bmiText = 'Нормальная масса тела') && (bmiColor = 'green')
    else if (bmi >= 25 && bmi < 30) (bmiText = 'Избыточная масса тела') && (bmiColor = 'yellow')
    else if (bmi >= 30 && bmi < 35) (bmiText = 'Ожирение 1-ой степени') && (bmiColor = 'orange')
    else if (bmi >= 35 && bmi < 40) (bmiText = 'Ожирение 2-ой степени') && (bmiColor = 'red')
    else (bmiText = 'Ожирение 3-ей степени') && (bmiColor = 'red')
  } else bmiText = 'ИМТ не определен'

  const lowWeight = +(18.5 * ((height / 100) ** 2)).toFixed(1)
  const highWeight = +(25 * ((height / 100) ** 2)).toFixed(1)
  const optimalWeight = lowWeight ? `Оптимальный вес: ${lowWeight}-${highWeight} кг` : 'Оптимальный вес не определен'

  let fatText, fatColor
  if (+age !== 0 && fat !== 0) {
    const fatKoef = findInRange(age, [14, 19, 29, 39, 49, 59, 69], [0, 1, 2, 3, 4, 5, 6, 7])
    if (sex === 'М') {
      [fatText, fatColor] = findInRange(fat, [11 + fatKoef, 16 + fatKoef, 21 + fatKoef], [
        ['Процент жировой ткани низкий', 'violet'],
        ['Процент жировой ткани нормальный', 'green'],
        ['Процент жировой ткани избыточный', 'orange'],
        ['Процент жировой ткани высокий', 'red']])
    } else {
      [fatText, fatColor] = findInRange(fat, [16 + fatKoef, 21 + fatKoef, 26 + fatKoef], [
        ['Процент жировой ткани низкий', 'violet'],
        ['Процент жировой ткани нормальный', 'green'],
        ['Процент жировой ткани избыточный', 'orange'],
        ['Процент жировой ткани высокий', 'red']])
    }
  } else fatText = 'Процент жировой ткани не определен'

  let waterText, waterColor
  if (+age !== 0 && water !== 0) {
    if (sex === 'М') {
      const waterKoef = findInRange(age, [16, 30, 60], [0, 5, 11, 16]);
      [waterText, waterColor] = findInRange(water, [58 - waterKoef, 72 - waterKoef], [
        ['Содержание воды недостаточное', 'sky'],
        ['Содержание воды в пределах нормы', 'green'],
        ['Содержание воды избыточное', 'orange']])
    } else {
      const waterKoef = findInRange(age, [16, 30, 60], [0, 10, 15, 20]);
      [waterText, waterColor] = findInRange(water, [57 - waterKoef, 67 - waterKoef], [
        ['Содержание воды недостаточное', 'sky'],
        ['Содержание воды в пределах нормы', 'green'],
        ['Содержание воды избыточное', 'orange']])
    }
  } else waterText = 'Содержание воды не определено'

  let muscleText, muscleColor
  if (+age !== 0 && muscle !== 0) {
    if (sex === 'М') {
      const [muscleKoef1, muscleKoef2] = findInRange(age, [14, 19, 29, 39, 49, 59, 69], [
        [0, 0], [1, 1], [2, 3], [3, 5], [4, 7], [5, 9], [6, 10], [7, 11]]);
      [muscleText, muscleColor] = findInRange(muscle, [44 - muscleKoef1, 57 - muscleKoef2], [
        ['Процент мышечной ткани низкий', 'red'],
        ['Процент мышечной ткани нормальный', 'green'],
        ['Процент мышечной ткани высокий', 'orange']])
    } else {
      const [muscleKoef1, muscleKoef2] = findInRange(age, [14, 19, 29, 39, 49, 59, 69], [
        [0, 0], [1, 2], [2, 4], [3, 5], [5, 7], [7, 9], [8, 10], [9, 11]]);
      [muscleText, muscleColor] = findInRange(muscle, [36 - muscleKoef1, 43 - muscleKoef2], [
        ['Процент мышечной ткани низкий', 'red'],
        ['Процент мышечной ткани нормальный', 'green'],
        ['Процент мышечной ткани высокий', 'orange']])
    }
  } else muscleText = 'Процент мышечной ткани не определен'

  return {
    bmiText,
    bmiColor,
    optimalWeight,
    fatText,
    fatColor,
    waterText,
    waterColor,
    muscleText,
    muscleColor
  }
}

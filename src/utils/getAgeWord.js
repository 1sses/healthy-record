export default function getAgeWord (age) {
  if (age % 10 === 1 && age !== 11) return 'год'
  if (age % 10 >= 2 && age % 10 <= 4 && Math.round(age / 10) !== 1) return 'года'
  return 'лет'
}

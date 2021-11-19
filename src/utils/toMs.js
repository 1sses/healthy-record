export default function toMs (date) {
  return new Date(date.split('.').reverse().join('-')).getTime()
}

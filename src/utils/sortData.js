import toMs from './toMs'

export default function sortData (data) {
  const buff = {}
  // eslint-disable-next-line no-return-assign
  Object.keys(data).sort((a, b) => toMs(a) - toMs(b)).forEach(item => buff[item] = data[item])
  return buff
}

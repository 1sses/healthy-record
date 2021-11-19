export default function findInRange (value, range, returned) {
  if (range.length + 1 !== returned.length) return undefined
  if (value < range[0]) return returned[0]
  for (let i = 1; i < range.length; i++) {
    if (value >= range[i - 1] && value <= range[i]) return returned[i]
  }
  return returned[returned.length - 1]
}

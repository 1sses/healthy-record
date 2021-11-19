export default function insertCurrentDate () {
  return new Date().toLocaleDateString().split('.').reverse().join('-')
}

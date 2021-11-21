import { useState } from 'react'

export default function useSync () {
  // status: не выполнена, требуется, не требуется
  const [status, setStatus] = useState('не выполнена')
  // color: tomato, gold, green
  const [color, setColor] = useState('tomato')
  const [autoSync, setAutoSync] = useState(!!localStorage.getItem('autoSync'))
  const [intervalId, setIntervalId] = useState(-1)

  return { status, setStatus, color, setColor, autoSync, setAutoSync, intervalId, setIntervalId }
}

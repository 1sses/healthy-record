import { useContext, useState } from 'react'
import DataContext from '../context/data'
import serverConfig from '../api/server.config'
import axios from 'axios'

export default function useSync () {
  // status: не выполнена, требуется, не требуется
  const [status, setStatus] = useState('не выполнена')
  // color: tomato, gold, green
  const [color, setColor] = useState('tomato')
  const sync = async (shouldUpdate, bodyData, proportions, otherData) => {
    const config = {
      method: 'post',
      url: serverConfig.syncURL,
      data: { bodyData, proportions, otherData },
      withCredentials: true
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Credentials': 'true'
      // }
    }
    const response = await axios(config)
    if (!response.data.error) {
      setStatus('не требуется')
      setColor('green')
    }
  }
  return { status, setStatus, color, setColor, sync }
}

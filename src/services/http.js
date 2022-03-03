import axios from 'axios'
import { EventBus } from './event-bus'

const Http = axios.create({
  withCredentials: false,
  baseURL: 'https://nuself.hnh-dev.ru/api/v1/admin/',
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
})

Http.interceptors.request.use(config => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${encodeURI(token)}`
  }

  return config
}, e => {
  console.log(e)
})

Http.interceptors.response.use(r => r.data, e => {
  if (e.response && ![400, 404].includes(e.response.status)) {
    EventBus.$emit('http-error', e)
  }

  return Promise.reject(e.response)
})

export default Http

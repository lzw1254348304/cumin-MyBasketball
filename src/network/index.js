import axios from 'axios'

const $request = axios.create({
  baseURL: 'http://127.0.0.1:2003',
  timeout: 5000
})

export default $request
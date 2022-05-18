import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: 'http://oneni.iptime.org:8080/api/v1',
  timeout: 5000
})

export default service

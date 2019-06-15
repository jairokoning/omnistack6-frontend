import axios from 'axios'

const api = axios.create({
    baseURL: 'https://box-backend-kng.herokuapp.com'
})

export default api
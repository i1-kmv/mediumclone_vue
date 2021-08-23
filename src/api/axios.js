import axios from 'axios'
import {getItem} from "../helpers/persistanceStorage"

axios.defaults.baseURL = 'https://conduit.productionready.io/api'

axios.interceptors.request.use(config => {
    const token = getItem('accessToken')
    const autorizationToken = token ? `Token ${token}` : ''
    config.headers.Autorization = autorizationToken
    return config
})

export default axios

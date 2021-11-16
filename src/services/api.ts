import axios from 'axios'

import { BASE_GOOGLE_NEWS_URL } from '../constants/apiConstants'

const api = axios.create({ baseURL: BASE_GOOGLE_NEWS_URL })

export { api }

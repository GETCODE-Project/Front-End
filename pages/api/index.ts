// api/index.ts

import axios, {Axios, AxiosRequestConfig} from 'axios'

const client: Axios = axios.create({
  baseURL: 'http://localhost:3000', // 프론트 URL
  headers: {
    'Content-Type': 'application/json',
  },
});
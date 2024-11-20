import './assets/main.css'
import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from './api'
import helper from './helper'
import axios from 'axios'

const app = createApp(App)

app.use(router)

app.mount('#app')

// axios.defaults.baseURL = 'https://www.swapi.tech/api/'
// setupCache(axios)
// app.config.globalProperties.$axios = axios
app.config.globalProperties.$api = api
app.config.globalProperties.$helper = helper
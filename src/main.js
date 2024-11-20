import './assets/main.css'
import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from './js/api'
import helper from './js/helper'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.config.globalProperties.$api = api
app.config.globalProperties.$helper = helper
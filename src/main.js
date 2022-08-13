import { createApp } from 'vue'

import './assets/css/style.css'
import './assets/css/font.css'

import App from './App.vue'



import router from './router'


createApp(App)
.use(router)
.mount('#app')

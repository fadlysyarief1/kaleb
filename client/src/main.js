// import './assets/main.css'
import './assets/login.css'
import './assets/util.css'
import './assets/vendor/animate/animate.css'
// import './assets/js/detail.js'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

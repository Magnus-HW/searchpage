import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import TheDashboard from './TheDashboard.vue'

const app = createApp(TheDashboard)

app.use(createPinia())

app.mount('#app')

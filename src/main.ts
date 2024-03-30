import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/styles/style.scss'
import App from './app/App.vue'

const pinia = createPinia
const app = createApp(App)

app.use(pinia).mount('#app')

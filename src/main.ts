import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'Styles/style.scss'
import App from './app/index.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).mount('#app')

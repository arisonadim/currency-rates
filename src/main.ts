import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'Styles/style.scss'
import App from 'App/index.vue'
import { router } from 'App/providers'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).use(router).mount('#app')

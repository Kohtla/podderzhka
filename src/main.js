import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '/src/App.vue'

import '/src/assets/main.css'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import '@fontsource-variable/rubik'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import setupPinia from './lib/pinia'

const app = createApp(App)

setupPinia(app)

app.use(router)

app.mount('#app')

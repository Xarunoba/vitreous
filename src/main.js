import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { setupLayouts } from 'virtual:generated-layouts'
import './style.css'
import App from './App.vue'
import generatedRoutes from '~pages'

const pinia = createPinia()
const app = createApp(App)
const routes = setupLayouts(generatedRoutes)
const router = createRouter({ history: createWebHistory(), routes })

app.use(pinia)
app.use(router)
app.mount('#app')

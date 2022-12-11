import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { setupLayouts } from 'virtual:generated-layouts'
import './style.css'
import App from './App.vue'
import generatedRoutes from '~pages'

const pinia = createPinia()
const app = createApp(App)
const routes = setupLayouts(generatedRoutes)
const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes })

app.use(pinia)
app.use(router)
app.mount('#app')

// Redirect from 404 (Hacky redirect workaround due to hosting this in storj.io)
if (sessionStorage.getItem('from_404') !== null) {
    const path = sessionStorage.getItem('from_404')
    sessionStorage.removeItem('from_404')
    router.push(path)
}

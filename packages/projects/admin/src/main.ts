import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from '~pages'



import 'rl_components/var.css'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app= createApp(App)
app.use(router)
app.mount('#app')

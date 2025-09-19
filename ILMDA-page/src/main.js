import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'

import App from './App.vue'
import router from './router'
import carousel from './components/carousel.vue'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("Carousel", carousel);
app.mount('#app')

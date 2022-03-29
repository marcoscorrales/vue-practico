import '@/styles/main.scss'
import App from './App.vue'
import { createApp } from 'vue'
import {router} from './router.js'

createApp(App).use(router).mount("#app");


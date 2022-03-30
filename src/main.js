import '@/styles/main.scss'
import App from './App.vue'
import { createApp } from 'vue'
import VueResource from 'vue-resource';
import {router} from './router.js'
import {store} from './store/store.js'

createApp(App).use(router,store,VueResource).mount("#app");


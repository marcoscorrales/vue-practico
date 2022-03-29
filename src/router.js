import FormPage from './components/FormPage.vue'
import {createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        // Cualquier otra ruta vuelve a home 
        path:'/:catchAll(.*)',
        redirect: '/home',
    },

    {
    path : '/home',
    name: 'form-page',
    component: FormPage,
    },

]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
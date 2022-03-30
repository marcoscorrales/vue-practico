import FormPage from './components/FormPage.vue'
import Settings from './components/settings/Settings-v.vue';
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
    {
        path : '/settings',
        name: 'settings-page',
        component: Settings,
    },

]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
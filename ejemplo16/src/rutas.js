import Vue from 'vue';
import Router from 'vue-router';
const Inicio = () => import('./components/Inicio.vue');
const Busqueda = () => import('./components/Busqueda.vue');

Vue.use(Router);

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Inicio',
            component: Inicio
        },
        {
            path: '/busqueda',
            name: 'Busqueda',
            component: Busqueda
        },
    ]
})
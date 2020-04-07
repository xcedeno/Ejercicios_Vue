import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './rutas/Inicio.vue';
import Contacto from './rutas/Contacto.vue';

Vue.use(Router);

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Inicio
        },
        {
            path: '/contacto',
            component: Contacto
        },
        {
            path: '*',
        },                
    ]
})
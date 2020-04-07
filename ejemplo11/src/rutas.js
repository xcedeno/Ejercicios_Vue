import Vue from 'vue';
import Router from 'vue-router';
import Portada from './components/Inicio.vue';

Vue.use(Router);

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Portada',
            component: Portada
        }
    ]
});

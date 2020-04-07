import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './rutas/Inicio.vue';
import Contacto from './rutas/Contacto.vue';
import Servicios from './rutas/Servicios.vue';
import Blog from './rutas/Blog.vue';
import Comentarios from './rutas/Comentarios.vue';
import NoEncontrada from './rutas/PaginaNoEncontrada.vue';

Vue.use(Router);

export default new Router ({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Inicio,
            name: "Inicio",
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: Contacto
        },
        {
            path: '/servicios',
            component: Servicios,
            name: 'Servicios',
        },
        {
            path: '/blog/:entrada',
            component: Blog,
            name: 'Blog',
            children: [
                {
                    path: 'comentarios',
                    component: Comentarios,
                    name: 'Comentarios'
                }
            ]
        },
        {
            path: '*',
            name: "No Existe",
            component: NoEncontrada
        },                
    ]
})
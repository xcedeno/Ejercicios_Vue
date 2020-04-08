import Vue from 'vue';
import Router from 'vue-router';
const Portada = ()=> import('./components/Inicio.vue');
const Contacto = ()=> import('./components/Contacto.vue');
import NotFound from './components/NotFound.vue';
import Articulo from './components/Articulo.vue';
const SobreMi = ()=> import('./components/SobreMi.vue');
const Post = ()=> import('./components/Post.vue');
import Administrador from './components/Administrador.vue';

Vue.use(Router);

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Portada',
            component: Portada
        },
        {
            path: '/contacto',
            name: 'Contacto',
            component: Contacto,
            alias: ['/contactame']
        },
        {
            path: '/administrador/:id',
            name: 'Administrador',
            component: Administrador,
            props: true
        },
        {
            path: '/post',
            name: 'Post',
            component: Post,
            children: [
                {
                    path: ':articulo',
                    component: Articulo,
                    name: 'Articulo'
                }
            ]
        },
        {
            path: '/sobremi',
            name: 'SobreMi',
            component: SobreMi,
            alias: ['/acerca']
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/portada',
            redirect: '/'
        },
        {
            path: '/inicio',
            redirect: '/'
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        },
    ]
});

import Vue from 'vue';
import Router from 'vue-router';
import Portada from './components/Inicio.vue';
import Contacto from './components/Contacto.vue';
import NotFound from './components/NotFound.vue';
import Articulo from './components/Articulo.vue';
import SobreMi from './components/SobreMi.vue';
import Post from './components/Post.vue';

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
            component: Contacto
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
            component: SobreMi
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        },
    ]
});

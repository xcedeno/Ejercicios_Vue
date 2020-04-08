import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './rutas/Inicio.vue';
import Contacto from './rutas/Contacto.vue';
import Servicios from './rutas/Servicios.vue';
import Blog from './rutas/Blog.vue';
import Comentarios from './rutas/Comentarios.vue';
import NoEncontrada from './rutas/PaginaNoEncontrada.vue';
import Cliente from './rutas/Cliente.vue';
import Usuario from './rutas/Usuario.vue';
import Gerencia from './rutas/Gerencia.vue';
import ContactoNuevo from './rutas/ContactoNuevo.vue';
import ServicioNueva from './rutas/ServicioNueva.vue';
import Demo from './rutas/Demo.vue';
import Demo2 from './rutas/Demo2.vue';
const LazyLoading = ()=> import('./rutas/LazyLoading.vue');

Vue.use(Router);

export default new Router ({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Inicio,
            name: "Inicio",
            children: [
                {
                    path: '',
                    components: {
                        lazyloading: LazyLoading
                    }
                }
            ]
        },
        {
            path: '/demo',
            component: Demo,
            name: "Demo",
            children: [
                {
                    path: '',
                    component: Servicios
                }
            ]
        },
        {
            path: '/demo2',
            component: Demo2,
            name: "Demo2",
            children: [
                {
                    path: '',
                    component: Servicios
                }
            ]
        },        
        {
            path: '/contacto',
            name: 'contacto',
            component: Contacto,
            redirect: '/contacto_nuevo'
        },
        {
            path: '/contacto_nuevo',
            component: ContactoNuevo,
            name: 'Contacto_Nuevo',
        },
        {
            path: '/servicios',
            component: Servicios,
            name: 'Servicios',
            redirect: to => {
                console.log(to);
                return {name: 'Servicios_Nueva'}
            },
            alias: ['/servicios_nuevos', '/mas_servicios']
        },
        {
            path: '/servicios_nueva',
            component: ServicioNueva,
            name: 'Servicios_Nueva',
        },
        {
            //la propiedad props con el valor true se le llama modo booleano
            path: '/cliente/:cliente',
            component: Cliente,
            name: 'Clientes',
            props: true
        },
        {
            //Props como objetos de parámetros de ruta
            path: '/usuario/:usuario',
            component: Usuario,
            name: 'Usuarios',
            props: {
                usuario: 'Adminsitrador principal'
            }
        },
        {
            //Props como funciones de parámetros de ruta
            path: '/gerencia/:user_gerencia',
            component: Gerencia,
            name: 'Gerencias',
            props: (route)=>({
                user_gerencia: `${route.params.user_gerencia}. <br> Bienvenido`
            })
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
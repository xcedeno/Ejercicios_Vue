import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    alias: ['/inicio']
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: () => import('../views/Usuarios.vue'),
  },
  {
    path: '/usuarios/:id',
    component: () => import('../views/InfoUsuario.vue'),
    name: 'InfoUsuario'
  },
  {
    path: '/user',
    redirect: '/usuarios'
  },
  {
    path: '/users',
    redirect: '/usuarios'
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

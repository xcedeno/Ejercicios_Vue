import Vue from 'vue';
import VueRouter from 'vue-router';
import Heroes from '../views/Heroes.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/heroes',
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: Heroes
  },
  {
    path: '/heroesdetail/:id',
    name: 'HeroesDetail',
    component: () => import('../views/HeroDetail.vue'),
    props: r => ({ id: parseInt(r.params.id) })
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

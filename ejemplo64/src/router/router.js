import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/heroes',
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: () => import(/* webpackChunkName: "bundle.heroes" */'../views/Heroes.vue'),
  },
  {
    path: '/heroesdetail/:id',
    name: 'HeroesDetail',
    component: () => import(/* webpackChunkName: "bundle.heroes" */'../views/HeroDetail.vue'),
    props: router => ({ id: parseInt(router.params.id) })
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "bundle.about" */'../views/About.vue')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "bundle.notfound" */'../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

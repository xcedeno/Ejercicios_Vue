import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/meetings',
    name: 'Meetings',
    component: () => import('../views/Meetings.vue')
  },
  {
    path: '/checkin/:usersID/:meetingsID',
    name: 'CheckIn',
    component: () => import('../views/CheckIn.vue')
  },
  {
    path: '/attendees/:usersID/:meetingsID',
    name: 'Attendees',
    component: () => import('../views/Attendees.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

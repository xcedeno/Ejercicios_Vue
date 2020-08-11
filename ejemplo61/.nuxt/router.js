import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fa13e6de = () => interopDefault(import('..\\pages\\albums\\about.vue' /* webpackChunkName: "pages/albums/about" */))
const _dbcc7184 = () => interopDefault(import('..\\pages\\albums\\_id.vue' /* webpackChunkName: "pages/albums/_id" */))
const _63c98d8c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/albums/about",
    component: _fa13e6de,
    name: "albums-about"
  }, {
    path: "/albums/:id?",
    component: _dbcc7184,
    name: "albums-id"
  }, {
    path: "/",
    component: _63c98d8c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';
const Category = () => import('./theme/Category.vue')
const  Login = () => import('./theme/Login.vue');
const PageNotFound = () => import('./theme/PageNotFound.vue');

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',
    scrollBehavior (to, from, savedPosition) {
        y:0  
    },
    routes: [
        {
            path: '/category/:id',
            component: Category,
            name: 'Category'
        },
        {
            path: '/',
            redirect: '/category/front-end'
        },
        {
            path: '/login',
            component: Login,
            name: 'Login'
        },
        {
            path: '*',
            component: PageNotFound,
            name: PageNotFound
        }      
    ]
});

export default router;
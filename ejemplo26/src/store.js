/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import appServe from './app.service';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        autorizado: false,
    },
    getters: {
        getValueAutorizado: (state) => {
            return state.autorizado;
        },
    },
    actions: {
        close (context) {
            context.commit('close');
        },
        login (context, datos) {
            return new Promise((resolve,reject) => {
                appServe.login(datos)
                    .then((data) => {
                        context.commit('login',data);
                        resolve();
                    })
                    .catch(() => {
                        window.alert("No puede entrar");
                        reject();
                    })
            })
        }
    },
    mutations: {
        close (state) {
            if (typeof window !== 'undefined') {
                window.localStorage.clear();
            }
            state.autorizado = false;
        },
        login (state, data) {
            if (typeof window !== 'undefined') {
                window.localStorage.setItem('token',data.token);
                window.localStorage.setItem('tokenExpiration',data.expiration);
            }
            state.autorizado = true;
        },
    }
});

if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', (event)=>{
        let expiration = window.localStorage.getItem('tokenExpiration');
        console.log(expiration);
        let tiempo = new Date().getTime() / 1000;
        console.log(tiempo);
        if (expiration !== null & parseInt(expiration) - tiempo > 0) {
            store.state.autorizado = true;
        };
    });
};

export default store;
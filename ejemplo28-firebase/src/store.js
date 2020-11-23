import Vue from 'vue'
import Vuex from 'vuex';
import {db} from './main.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        items: null
    },
    getters: {
        getItems: state => {
            return state.items;
        }
    },
    mutations: {
        setItem: (state) => {
            let cosas = [];
            db.collection('items').orderBy('createAt').onSnapshot((snapshot)=>{
                cosas = [];
                snapshot.forEach(element => {
                    cosas.push({
                        id : element.id,
                        title : element.data().title
                    });

                    state.items = cosas
                });
            })
        }
    },
    actions: {
        setItems: (context) => {
            context.commit('setItem');
        }
    }
});

export default store;
import Vue from 'vue';
import Vuex from 'vuex';
import { getApi } from "@/services/apiConfig";
import createPersistedState from "vuex-persistedstate";
import * as shoppingCart from "./modules/shoppingCart";

const persistedState = createPersistedState({
  paths: ['shoppingCart.cartItems']
})

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [persistedState],
  state: {
    pokemones: [],
    alert: null,
  },
  getters: {
    enviandoPokemones(state){
      return state.pokemones;
    },
    enviandoMejoresPokemones(state,getters){
      return getters.enviandoPokemones.filter(result => result.rate > 3);
    },
    enviandoAlert(state){
      return state.alert;
    }
  },
  mutations: {
    mutandoPokemones(state,datos){
      state.pokemones = datos;
    },
    createAlert(state,item){
      state.alert = item;
    },
    deleteAlert(state){
      state.alert = null;
    }
  },
  actions: {
    async llamdoApi({commit}){
      let datos = await getApi('productList');
      commit('mutandoPokemones',datos);
    },
    addAlert({commit},item){
      commit('createAlert',item);
    },
    removeAlert({commit}){
      commit('deleteAlert')
    }
  },
  modules: {
    shoppingCart
  }
})

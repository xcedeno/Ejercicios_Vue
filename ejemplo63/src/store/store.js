import Vue from 'vue';
import Vuex from 'vuex';
import { getApi } from "@/services/apiConfig";
import * as shoppingCart from "./modules/shoppingCart";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemones: [],
  },
  getters: {
    enviandoPokemones(state){
      return state.pokemones;
    },
    enviandoMejoresPokemones(state,getters){
      return getters.enviandoPokemones.filter(result => result.rate > 3);
    },
  },
  mutations: {
    mutandoPokemones(state,datos){
      state.pokemones = datos;
    },
  },
  actions: {
    async llamdoApi({commit}){
      let datos = await getApi('productList');
      commit('mutandoPokemones',datos);
    },
  },
  modules: {
    shoppingCart
  }
})

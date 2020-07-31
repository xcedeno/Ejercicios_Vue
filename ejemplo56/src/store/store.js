import Vue from 'vue';
import Vuex from 'vuex';
import { ob1, ob3 } from "./modules/objetoAStore";

Vue.use(Vuex)

const ob2 = {
  namespaced: true,
  state: {
    conteo: 0
  },
  mutations: {
    contando(state,valor){
      state.conteo += valor;
    }
  },
  actions: {
  },
  getters: {
    getConteo: (state) => (num1) => {
      return state.conteo * num1
    }
  },
}

export default new Vuex.Store({
  modules: {
    ob1,
    ob2,
    ob3
  }
})

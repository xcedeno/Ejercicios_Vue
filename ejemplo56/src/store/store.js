import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
  }
})

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    opiniones: [],
    juegos: [],

  },
  getters: {
    enviandoJuegos(state){
      return state.juegos;
    },
    enviandoOpiniones(state){
      return state.opiniones;
    }
  },
  mutations: {
    mutandoJuegos(state,datos) {
      state.juegos = datos.results;
    },
    mutandoOpiniones(state, dataOpinion){
      state.opiniones.push(dataOpinion);
    }
  },
  actions: {
    async infoApi({commit}){
      let result = await fetch('https://api.rawg.io/api/games');
      let datos = await result.json();
      commit('mutandoJuegos',datos)
    },
    guardandoOpinion({commit},dataOpinion){
      commit('mutandoOpiniones',dataOpinion)
    }
  },
})

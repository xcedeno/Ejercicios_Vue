import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    opiniones: [],
    juegos: [],

  },
  plugins: [createPersistedState()],
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
    },
    borrarOpinion(state,index){
      state.opiniones.splice(index,1);
    }
  },
  actions: {
    async infoApi({commit}){
      let result = await fetch('https://api.rawg.io/api/games');
      let datos = await result.json();
      commit('mutandoJuegos',datos);
    },
    guardandoOpinion({commit},dataOpinion){
      commit('mutandoOpiniones',dataOpinion);
    },
    eliminarOpinion({commit}, index){
      commit('borrarOpinion',index);
    },
    guardandoEdicion(context,editado){
      console.log(editado);
    }
  }
})

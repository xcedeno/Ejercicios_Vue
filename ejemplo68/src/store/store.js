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
      let id = 1;
      while (id !== dataOpinion.id) {
        id = Math.floor((Math.random() * 100) + 1);
      }
      dataOpinion.id = id;
      state.opiniones.push(dataOpinion);
    },
    borrarOpinion(state,index){
      state.opiniones.splice(index,1);
    },
    editandoOpinion(state,editado){
      let resultado = state.opiniones.find(valor => valor.id === editado.id);
      if (resultado !== undefined) {
        resultado = editado;
      } else {
        alert("No se puede editar");
      }
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
    guardandoEdicion({commit},editado){
      commit('editandoOpinion',editado)
    }
  }
})

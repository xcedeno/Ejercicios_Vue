import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mensaje: 'Envio de información desde el estado de Vuex',
    nombre: 'Vue',
    apellido: 'JS',
    objetos: [],
    objeto: null
  },
  getters: {
    llamadoVariables(state){
      console.log(state);
      return state.mensaje;
    },
    nombreCompleto(state){
      return `${state.nombre} ${state.apellido}`;
    }
  },
  mutations: {
    agregarObjetos(state,objeto2){
      state.objetos = [objeto2, ...state.objetos];
    },
    borrarObjeto(state,index){
      state.objetos.splice(index,1);
    }
  },
  actions: {
    agregandoObjeto(context,objeto2) {
      context.commit('agregarObjetos',objeto2);
    }
  }
});

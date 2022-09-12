import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    planes: [],
    opiniones: [],
    pagedResult: {},
    productos: []
  },
  getters: {
    getPlanes(state) {
      return state.planes;
    },
    getOpiniones(state) {
      return state.opiniones;
    },
    getPagedResult(state){
      return state.pagedResult;
    },
    getProductos(state){
      return state.productos;
    }
  },
  mutations: {
    setPlanes(state, planesIn) {
      state.planes = planesIn;
    },
    setOpiniones(state, opinionesIn) {
      state.opiniones = opinionesIn;
    },
    setPageResult(state, pageResultIn){
      state.pagedResult = pageResultIn;
    },
    setProductos(state,productosIn){
      state.productos = productosIn;
    }
  },
  actions: {
    async getInfoHome({ commit }) {
      const urlBase = "home.json";

      const {
        data: { planes, opiniones },
      } = await axios.get(urlBase);
      commit("setPlanes", planes);
      commit("setOpiniones", opiniones);
    },
    async getEquipos({commit}){
      const urlBase = "equipos.json";

      const { data: {pagedResult, productos} } = await axios.get(urlBase);
      commit("setProductos",productos);
      commit("setPageResult",pagedResult);
    }
  },
});

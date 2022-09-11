import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    planes: [],
    opiniones: [],
  },
  getters: {
    getPlanes(state) {
      return state.planes;
    },
    getOpiniones(state) {
      return state.opiniones;
    },
  },
  mutations: {
    setPlanes(state, planesIn) {
      state.planes = planesIn;
    },
    setOpiniones(state, opinionesIn) {
      state.opiniones = opinionesIn;
    },
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
  },
  modules: {},
});

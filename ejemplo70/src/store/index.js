import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "",
    bancos: [],
  },
  getters: {
    getToken(state){
      return state.token;
    },
    getBancos(state){
      return state.bancos;
    }
  },
  mutations: {
    updateToken(state,tokenIn){
      state.token = tokenIn;
    },
    updateBancos(state,bancosIn){
      state.bancos = bancosIn;
    }
  },
  actions: {
    async postUserToken({commit}){
      const urlBase = "login.json";

      const { data: { token }} = await axios.get(urlBase);
      commit("updateToken",token);
    },

    async getBancos({commit, state}){
      const urlBase = "bancos.json";
      const headersToApi = { 
        "Authorization": `Bearer ${state.token}`
      }
      const { data: { bancos } } = await axios.get(urlBase,{headers: headersToApi});
      commit("updateBancos",bancos);
    }
  }
})

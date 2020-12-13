import Vue from 'vue';
import Vuex from 'vuex';
import { getApi } from "@/services/apiConfig";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemones: [],
    cartItems: [],
    cartStatus: 0,
  },
  getters: {
    enviandoPokemones(state){
      return state.pokemones;
    },
    enviandoCartItems(state){
      return state.cartItems;
    },
    enviandoCartStatus(state){
      return state.cartStatus;
    },
    totalCartItems(state,getters){
      return getters.enviandoCartItems.length;
    }
  },
  mutations: {
    mutandoPokemones(state,datos){
      state.pokemones = datos;
    },
    mutandoCartItem(state,item){
      state.cartItems.push(item)
    }
  },
  actions: {
    async llamdoApi({commit}){
      let datos = await getApi('productList');
      commit('mutandoPokemones',datos);
    },
    addItem({commit,getters}, item){
      let buscarItem = getters.enviandoCartItems.find(result => result.id == item.id);
      if(buscarItem){
        commit('mutandoCartItem',item);
        this.$notify({
          title: 'Success',
          message: 'Se agregó correctamente',
          type: 'success'
        });
      }
    }
  },
  modules: {
  }
})

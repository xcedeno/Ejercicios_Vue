import Vue from 'vue';
import Vuex from 'vuex';
import { getApi } from "@/services/apiConfig";
import { Notification } from 'element-ui';

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
    },
    removeItemById(state,id){
      let encontrado = state.cartItems.findIndex(result => result.id == id);
      state.cartItems.splice(encontrado,1);
      // otra menera de tantas
      //state.cartItems = state.cartItems.filter(result => result.id !== id)
    }
  },
  actions: {
    async llamdoApi({commit}){
      let datos = await getApi('productList');
      commit('mutandoPokemones',datos);
    },
    addItem({commit,state}, item){
      let buscarItem = state.cartItems.find(result => result.id == item.id);
      console.log(buscarItem);
      if(!buscarItem){
        commit('mutandoCartItem',item);
        Notification.success({
          title: 'Success',
          message: 'Se agregó correctamente',
          type: 'success'
        });
      } else {
        Notification.error({
          title: 'Success',
          message: 'No se puede agregar',
          type: 'success'
        });
        console.log("error");
      }
    },
    itemToTrash({commit},id){
      commit('removeItemById',id)
    }
  },
  modules: {
  }
})

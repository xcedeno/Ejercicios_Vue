import Vue from 'vue';
import Vuex from 'vuex';
import { APIPOST, APIGET } from "../config/apiConfig";
import router from '../router/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activoNavBar: false,
    tokenLogin: ""

  },
  getters: {

  },
  mutations: {
    datoLoginMutacion(state,res){
      state.tokenLogin = res.token;
    },
    activandoNavBar(state,dato){
      state.activoNavBar = dato;
    }
  },
  actions: {
    probandoLogin(context,datoLoginRecibido){
      APIPOST(datoLoginRecibido).then(res=>{
        if (res.username == datoLoginRecibido.username) {
          router.replace('/dashboard')
          context.commit("datoLoginMutacion",res)
        } else {
          alert('No esta autorizado');
        }
      }).catch(err=>{
        console.error(err);
      })
    },
    paginaActiva(context,dato){
      APIGET('secure/dashboard').then(respon => {
        console.log(respon);
      }).catch(error => console.error(error))
      context.commit("activandoNavBar",dato);
    }
  },
})

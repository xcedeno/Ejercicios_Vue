import Vue from 'vue';
import Vuex from 'vuex';
import { APIPOST, APIGET } from "../config/apiConfig";
import router from '../router/router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activoNavBar: false,
    tokenLogin: JSON.parse(localStorage.getItem('userToken')) || "",
    datosDashboar: []
  },
  getters: {

  },
  mutations: {
    datoLoginMutacion(state,res){
      state.tokenLogin = res.token;
      localStorage.setItem('userToken', JSON.stringify(res.token));
    },
    activandoNavBar(state,dato){
      state.activoNavBar = dato;
    },
    dataDashboar(state,datoRecibido){
      state.datosDashboar = datoRecibido;
    }
  },
  actions: {
    probandoLogin(context,datoLoginRecibido){
      APIPOST(datoLoginRecibido).then(res=>{
        if (res.username == datoLoginRecibido.username) {
          context.commit("datoLoginMutacion",res);
          router.push('/dashboard');
        } else {
          alert('No esta autorizado');
        }
      }).catch(err=>{
        console.error(err);
      })
    },
    paginaActiva(context,dato){
      if (dato) {
        APIGET('secure/dashboard').then(respon => {
          console.log(respon);
          context.commit("dataDashboar",respon);
        }).catch(error => console.error(error));
      }
      context.commit("activandoNavBar",dato);
    }
  },
})

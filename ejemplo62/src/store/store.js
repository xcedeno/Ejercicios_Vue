import Vue from 'vue';
import Vuex from 'vuex';
import { APIPOST, APIGET } from "../config/apiConfig";
import router from '../router/router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activoNavBar: false,
    tokenLogin: JSON.parse(localStorage.getItem('userToken')) || "",
    datosDashboar: [],
    datosDashboarKpis: [],
    datosDashboarUtimasOrdenes: [],
    datosEnStore: false,
  },
  getters: {
    enviandoKpis(state){
      return state.datosDashboarKpis;
    },
    enviandoUO(state){
      return state.datosDashboarUtimasOrdenes;
    }
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
      state.datosDashboarKpis = datoRecibido.kpis;
      state.datosDashboarUtimasOrdenes = datoRecibido.utimas_ordenes;
      state.datosEnStore = true;
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
      context.commit("activandoNavBar",dato);
    },
    indicadoresCumplimiento(context){
      APIGET('secure/dashboard').then(respon => {
        console.log(respon);
        context.commit("dataDashboar",respon);
      }).catch(error => console.error(error));
    }
  },
})

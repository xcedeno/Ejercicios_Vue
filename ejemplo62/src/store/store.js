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
    datosDashboarUltimasDevoluciones: [],
    datosEnStore: false,
  },
  getters: {
    enviandoKpis(state){
      return state.datosDashboarKpis;
    },
    enviandoUO(state){
      return state.datosDashboarUtimasOrdenes;
    },
    enviandoUD(state){
      return state.datosDashboarUltimasDevoluciones;
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
      state.datosDashboarUltimasDevoluciones = datoRecibido['ultimas_devoluciones:'];
      state.datosEnStore = true;
    },
    monitorOrdenes(state,datoRecibido){
      console.log(datoRecibido);
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
    },
    listadoOrdenes(context){
      APIGET('secure/ordenes?oficina=&estado&fecha-ini=&fecha-fin=&page=1&size=10').then(respon => {
        console.log(respon);
        context.commit("monitorOrdenes",respon);
      }).catch(error => console.error(error));
    }
  },
})

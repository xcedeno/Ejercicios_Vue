import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    planes: [],
    opiniones: [],
    pagedResult: {},
    productos: [],
    card: [],
    subTotal: 0,
    descuento: 0,
    total: 0,
  },
  getters: {
    getPlanes(state) {
      return state.planes;
    },
    getOpiniones(state) {
      return state.opiniones;
    },
    getPagedResult(state) {
      return state.pagedResult;
    },
    getProductos(state) {
      return state.productos;
    },
    getCardProducts(state) {
      return state.card;
    },
    getSubTotalCard(state) {
      return state.subTotal;
    },
    getDescuento(state) {
      return state.descuento;
    },
    getTotalCard(state) {
      return state.total;
    },
  },
  mutations: {
    setPlanes(state, planesIn) {
      state.planes = planesIn;
    },
    setOpiniones(state, opinionesIn) {
      state.opiniones = opinionesIn;
    },
    setPageResult(state, pageResultIn) {
      state.pagedResult = pageResultIn;
    },
    setProductos(state, productosIn) {
      state.productos = productosIn;
    },
    setCardProducts(state, productId) {
      const productoToAdd = state.productos.find(
        (product) => product.id === productId
      );
      state.card.push(productoToAdd);
    },
    setSubtotal(state) {
      state.subTotal = state.card.reduce((previ, curre) => {
        state.subTotal = previ + curre.precio_promo;
        return state.subTotal;
      }, 0);
    },
    setDescuento(state) {
      state.descuento =
        state.subTotal < 100000
          ? Math.round(state.subTotal * 0.05)
          : Math.round(state.subTotal * 0.07);
    },
    setTotal(state) {
      state.total = state.subTotal - state.descuento;
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
    async getEquipos({ commit }) {
      const urlBase = "equipos.json";

      const {
        data: { pagedResult, productos },
      } = await axios.get(urlBase);
      commit("setProductos", productos);
      commit("setPageResult", pagedResult);
    },
    addingProduct({ commit }, producId) {
      commit("setCardProducts", producId);
      commit("setSubtotal");
      commit("setDescuento");
      commit("setTotal");
    },
  },
});

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// generando instancia de Vuex
const store = new Vuex.Store({
    //utilizacion de estados
    state: {
        ocupado: false,
        totalVentas: 1000,
        totalDeudas: 345,
        creditos: true,
        productos: [
            {id: '0001', name: "Guitarra Eléctrica I", stock: "24", precio: "830000"},
            {id: '0002', name: "Bajo Eléctrico II", stock: "12", precio: "330000"},
            {id: '0003', name: "Teclado Electrónico III", stock: "0", precio: "530000"},
            {id: '0004', name: "Guitarra Acustica Clasica IV", stock: "10", precio: "164000"},
            {id: '0005', name: "Piano de Cola Completa V", stock: "0", precio: "3430000"},
        ],
    },
    getters: {
        productosConCantidad: state => {
            return state.productos.filter((productos) => {return productos.stock > 0});
        },
        productosConCantidadBaratos: (state,getters) => {
            return getters.productosConCantidad.filter((barato)=>{return barato.precio < 500000})
        },
        productoPorId: (state,getters) => (id) => {
            return getters.productosConCantidad.filter((producto)=>{return producto.id == id});
        }
    }
});

export default store;
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        juegos: [
            {codigo: "0001", nombre: "Sekiro", stock: "3", precio: "30000", color: "red", destacado: "true"},
            {codigo: "0002", nombre: "Fifa 21", stock: "10", precio: "25000", color: "blue", destacado: "false"},
            {codigo: "0003", nombre: "Gears of War 4", stock: "2", precio: "15000", color: "green", destacado: "true"},
            {codigo: "0004", nombre: "Mario Tennis Aces", stock: "1", precio: "35000", color: "yellow", destacado: "false"},
            {codigo: "0005", nombre: "Bloodborne", stock: "3", precio: "10000", color: "blue", destacado: "false"},
            {codigo: "0006", nombre: "Forza Horizon 4", stock: "4", precio: "20000", color: "red", destacado: "true"},
        ],
        titulo: "32bits",
        subtitulo: "Juegos de PC y consolas",
        ventas: []
    },
    getters: {
        cantidadDeJuegosTotalesStock: state => {
            return state.juegos.filter((juego,)=>{return juego.stock > 0})
        },
        busquedaJuegos: (state,getters) => (id) => {
            return getters.cantidadDeJuegosTotalesStock.filter((numero)=>{return numero.codigo == id})
        },
        juegosDisponibles: state => {
            return state.juegos.length;
        },
    },
    mutations: {
        vendiendo: (state,productoVendido) => {
            state.juegos.map((produc)=>{
                if (produc.codigo == productoVendido) {
                    produc.stock--;
                    alert("Venta Procesada")
                }
            })
        },
        registroVenta: (state,productoVendido) => {
            state.ventas.push({
                "codigo":productoVendido.codigo,
                "nombre":productoVendido.nombre,
                "precio":productoVendido.precio,
        });
        }
    },
    actions: {
        ventaProducto: (context,productoVendido)=>{
            if (productoVendido.stock > 0) {
                setTimeout(()=>{
                    context.commit('vendiendo',productoVendido.codigo);
                },2000)
                setTimeout(()=>{
                    context.commit('registroVenta',productoVendido);
                },1000)
            }else {
                alert("No se puede vender")
            }
        }
    }
});

export default store;
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// generando instancia de Vuex
const store = new Vuex.Store({
    //utilizacion de estados
    state: {
        ocupado: false,
        totalVentas: 0,
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
        },
    },
    mutations: {
        modificandoOcupado: (state) => {
            state.ocupado = !state.ocupado;
        },
        modificandoCredito: (state) => {
            state.creditos = !state.creditos;
        }, 
        agregandoStock: (state,productoRecibido)=> {
            state.productos.map((produc)=>{
                if (produc.id == productoRecibido) {
                    produc.stock++;
                }
            })
        },
        venderProducto: (state,productoVendido) => {
            state.productos.forEach((produc)=>{
                if (produc.id == productoVendido.id) {
                    if (productoVendido.stock > 0) {
                        produc.stock--;
                        state.totalVentas += parseFloat(productoVendido.precio);
                    } else {
                        alert("No existe inventario para vender el producto");
                    }
                }
            })
        },
    },
    actions: {
        modificandoCredito: context => {
            context.commit('modificandoCredito');
        },
        actualizarVentaProducto(context,productoVendido) {
            context.dispatch('ventaConPromesa',productoVendido).then(()=>{
                alert("Venta exitosa")
            }).catch(()=>{
                console.log("Error de venta por inventario")
            })
        },
        ventaConPromesa(context,productoVendido){
            return new Promise((si,no) => {
                let resultado = false;
                if (productoVendido.stock > 0) {
                    context.commit('venderProducto',productoVendido)
                    resultado = true;
                }
                if (resultado) {
                    si();
                }else {
                    no();
                }
                
            })
        }
    }
});

export default store;
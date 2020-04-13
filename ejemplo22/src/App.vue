<template>
  <div>
    <div id="app" class="row row-cols-1 row-cols-md-3">
      <Productos v-for="(item, index) in product_json" :key="index"
        :producto="item"
        @agregarCarro="agregando"
        :elCarro="carroCompra"
      />
    </div>
    <div class="col-md5 my-5">
        <Carro :productosVendidos="carroCompra" @eliminarProducto="borrarPruducto" @pagar="pagando"></Carro>
    </div>
  </div>
</template>

<script>
import product_json from './assets/productos.json';
import Productos from './components/Productos.vue';
import Carro from './components/Carro.vue';
import Swal from 'sweetalert2';

export default {
  name: 'App',
  data() {
    return {
      product_json,
      carroCompra: [],
    }
  },
  components: {
    Productos,
    Carro
  },
  methods: {
    agregando(productoRecibido){
      this.carroCompra.push(productoRecibido);
    },
    borrarPruducto(borrando){
      this.carroCompra = this.carroCompra.filter(produc => produc.id != borrando.id);
    },
    pagando(){
      if (this.carroCompra.length > 0) {
        this.carroCompra = [];
        Swal.fire(
          'Felicidades!',
          'Venta realizada con exito',
          'success'
        );
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No existen productos en el carro de compras',
          footer: '<p>Añada productos al carro</p>'
        })
      }
    }
  },
}
</script>

<style>

</style>

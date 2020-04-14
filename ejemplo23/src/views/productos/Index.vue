<template>
  <div>
    <h1>Productos</h1>
    <div class="row row-cols-1 row-cols-md-3">
      <div class="col mb-4" v-for="(item, index) in productos_json" :key="index">
        <b-card-group>
            <b-card :title="item.titulo" :img-src="item.imagen" :img-alt="item.id" img-top>
              <b-card-text>{{item.descripcion | recorte}}...</b-card-text>
              <router-link :to="{name: 'Producto', params:{id:item}}">Más Información</router-link>
            </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
import productos_json from '../../assets/productos.json';
export default {
  name: "Index",
    data() {
    return {
      productos_json
    }
  },
  filters: {
    recorte(texto){
      return texto.substr(0,20);
    }
  }
};
</script>

<style scoped>
.productos_style {
  background-color: azure;
  border: 1px solid black;
  margin-top: 10px;
}

.filas {
  border: 1px solid black;
}
</style>
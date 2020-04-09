<template>
  <div>
    <p>Listado de Juegos</p>
    <ul class="lista" v-show="entrada == ''">
      <li v-for="(item, index) in cantidadJuegos" :key="index" :style="{ backgroundColor: item.color }">
        <label>{{ item.codigo }} | {{ item.nombre }} | {{ item.stock }} | {{ item.precio }}</label>
      </li>
    </ul>
    <ul class="lista" v-show="entrada != '' && busquedas.length > 0">
      <li v-for="(item, index) in busquedas" :key="index" :style="{ backgroundColor: item.color }">
        <label>{{ item.codigo }} | {{ item.nombre }} | {{ item.stock }} | {{ item.precio }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'ListadoJuegos',
    props: {
        busquedas: {
            type: Array,
            required: false
        },
        cantidadJuegos: {
            type: Array,
            required: false
        },
        entrada: {
            type: String,
            required: false
        }
    },
};
</script>

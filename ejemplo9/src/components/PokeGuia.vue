<template>
  <div class="hello">
    <img :src="foto" alt="foto de pokemon">
    <p>Nombre del Pokémon: <strong><span v-text="nombre"></span></strong></p>
  </div>
</template>

<script>
export default {
  name: 'PokeGuia',
  props: {
    foto: {
      type: String,
      required: false
    },
    nombre: {
      type: String,
      required: false
    },
  }
}
</script>

<style scoped>

</style>

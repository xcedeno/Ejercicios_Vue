<template>
  <div class="container">
    <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
      <p v-colorTexto.cursiva>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perferendis veniam natus et <span v-tipoTexto.negrita = "'Times New Roman'">explicabo praesentium modi quas</span>, voluptas doloribus, maxime commodi atque debitis dicta <span v-tipoTexto.capitalize = "'helvetica'">voluptates necessitatibus adipisci maiores, distinctio odit?</span></p>
      <b-button variant="primary" href="#">Clic</b-button>
    </b-jumbotron>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
</style>

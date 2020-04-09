<template>
  <div>
    <h1>32bits</h1>
    <h2>Juegos de PC y consolas</h2>
    <nav class="navbar">
      <a><router-link :to="{name: 'Inicio'}">Incio</router-link></a>
      <a><router-link :to="{name: 'Busqueda'}">Búsqueda</router-link></a>
      <a><router-link :to="{name: 'Busqueda'}">Ventas</router-link></a>
      <a><router-link :to="{name: 'Busqueda'}">Total</router-link></a>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
//import { mapState } from "vuex";
export default {
  name: 'Incio',

}
</script>

<style scoped>
.navbar {
  display: flex;
  background-color: #333;
}
.navbar a {
  color: white;
  padding: 14px 20px;
  text-decoration: none;
  text-align: center;
}
.navbar a:hover {
  background-color: #ddd;
  color: black;
}
</style>

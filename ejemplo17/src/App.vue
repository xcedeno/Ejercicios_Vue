<template>
  <div id="app">
    <nav class="navbar">
      <a><router-link :to="{name: 'Inicio'}">Incio</router-link></a>
      <a><router-link :to="{name: 'Busqueda'}">Búsqueda</router-link></a>
      <a><router-link :to="{name: 'Ventas'}">Ventas</router-link></a>
      <a><router-link :to="{name: 'Busqueda'}">Total</router-link></a>
    </nav>
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
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
.vista-enter-active, .vista-leave-active {
    transition: opacity .1s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
</style>

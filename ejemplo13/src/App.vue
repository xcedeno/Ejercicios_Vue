<template>
  <div id="app">
    <h1>Utilizando Vue-Router con Vue-Cli</h1>
    <nav>
      <router-link to="/">Inicio |</router-link>
      <router-link to="/servicios"> Servicios |</router-link>
      <router-link to="/contacto"> Contacto</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  body {
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    list-style: none;
  }
</style>

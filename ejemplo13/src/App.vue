<template>
  <div id="app">
    <h1>Utilizando Vue-Router con Vue-Cli</h1>
    <nav>
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/servicios">Servicios</router-link></li>
        <li><router-link to="/blog/1">Blog</router-link></li>
        <li><router-link to="/demo">Demo</router-link></li>
        <li><router-link to="/demo2">Demo2</router-link></li>
        <li><router-link :to="{ name: 'contacto' }">Contacto</router-link></li>
      </ul>
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

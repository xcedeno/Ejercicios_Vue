<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{name: 'Contacto'}">Contacto</router-link> |
      <router-link to="/usuarios">Usuarios</router-link> |
      <router-link :to="{name: 'Login'}">Login</router-link> |
      <router-link :to="{name: 'SignUp'}">SignUp</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>

<template>
  <div id="app" class="container">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item> |
        <b-nav-item to="/about">About</b-nav-item> |
        <b-nav-item :to="{name: 'Contacto'}">Contacto</b-nav-item> |
        <b-nav-item to="/usuarios">Usuarios</b-nav-item> |
        <b-nav-item :to="{name: 'Login'}">Login</b-nav-item>
        <b-nav-item :to="{name: 'Productos'}">Productos</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
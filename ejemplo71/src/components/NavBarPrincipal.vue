<template lang="">
  <div>
    <b-navbar type="dark" variant="dark" toggleable="md" class="navbar-item">
      <b-navbar-nav>
        <router-link :to="{name: 'Home'}" class="nav-link">Home</router-link>
      </b-navbar-nav>
      <b-navbar-toggle target="nav-collapse" class="navbar-hamburge"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="navbar-selecciones">
          <router-link :to="{name: 'Equipos'}" class="nav-link">Equipos</router-link>
          <b-nav-item href="#">Planes</b-nav-item>
          <b-nav-item href="#">Prepago</b-nav-item>
          <b-nav-item href="#">Oficina Virtual</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
    name: 'NavBarPrincipal',
};
</script>
<style lang="scss">
    .navbar-hamburge{
        margin-right: 30px;
    }
    .navbar-selecciones {
        margin-left: 55px;
    }
    .navbar-item > a{
      text-decoration: none;
    }
</style>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <a class="navbar-brand" href="#">Aplicación Usuarios</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto nav-pills">
          <router-link to="/" active-class="active" exact class="nav-item nav-link">Inicio</router-link>
          <router-link to="/usuarios" active-class="active" exact class="nav-item nav-link">Usuarios</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Rutas',
}
</script>

<style scoped>

</style>

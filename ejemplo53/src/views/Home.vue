<template>
  <div class="mt-4">
    <div class="text-secondary text-center">
      Bienvenido de vuelta <span v-text="users" class="font-weight-bold text-info"></span>
    </div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-10 col-md-10 col-lg-8 col-xl-7">
          <h4 class="display-4 text-primary mb-2">Meeting Log</h4>
          <p class="lead">
            Esta sencilla aplicación crea reuniones, permite que las personas se registren y selecciona usuarios aleatorios para otorgar obsequios. Es un buen ejemplo de una aplicación de página única que incluye conexión a una base de datos y enrutamiento. Es una forma práctica de aprender
            <a
              href="https://vuejs.org/"
            >Vue.js</a>
            con
            <a href="https://firebase.google.com">Firebase</a>.
            <font-awesome-icon icon="star"></font-awesome-icon>
          </p>

          <router-link class="btn btn-outline-primary mr-2" to="/register">Register</router-link>
          <router-link class="btn btn-outline-primary mr-2" to="/login">Log In</router-link>
          <router-link class="btn btn-primary" to="/meetings">Meetings</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props:['users']
}
</script>

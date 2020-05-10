<template>
  <div class="container">
    <div class="jumbotron">
      <button type="button" @click="seleccion = 'IniciarSesion'" class="btn btn-primary">Iniciar Sesión</button>
      <button type="button" @click="seleccion = 'CambiarClave'" class="btn btn-primary mx-2">Recuperar Clave</button>
      <keep-alive>
        <component :is="seleccion"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Formulario from './components/Formulario.vue';
import CambiarClave from './components/CambiarClave.vue';
import IniciarSesion from './components/IniciarSesion.vue';

export default {
  name: 'App',
  data() {
    return {
      seleccion: 'IniciarSesion'
    }
  },
  components: {
    Formulario,
    CambiarClave,
    IniciarSesion
  }
}
</script>

<style>

</style>

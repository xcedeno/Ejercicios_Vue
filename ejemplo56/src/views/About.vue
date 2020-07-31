<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="toggle">{{activo ? 'Desactivar' : 'Activar'}}</button>
    <transition name="fade" enter-active-class="animated tada" leave-active-class="animated bounceOutRight" >
      <div v-if="activo">
        <h3 class="mensaje">Mensaje con transition ... </h3>
      </div>
    </transition>
    <p>Con transition reutilizable</p>
    <button @click="toggle2">{{activo2 ? 'Desactivar' : 'Activar'}}</button>
    <animando>
      <div v-if="activo2">
        <h3 class="mensaje2">Mensaje con transition desde componente... </h3>
      </div>
    </animando>
  </div>
</template>
<script>
import Animando from '../components/Animaciones.vue';

export default {
  name: 'About',
  data() {
    return {
      activo: false,
      activo2: false
    }
  },
  methods: {
    toggle(){
      this.activo = !this.activo;
    },
    toggle2(){
      this.activo2 = !this.activo2;
    }
  },
  components: {
    Animando
  }
}
</script>

<style scoped>
  .mensaje{
    color: blue;
    background-color: beige;
    font-size: 20px;
    width: 200px;
    height: 200px;
    border: 1px solid black;
    margin: 0 auto;
    text-align: center;
  }
    .mensaje2{
    color: rgb(255, 0, 0);
    background-color: beige;
    font-size: 20px;
    width: 200px;
    height: 200px;
    border: 1px solid black;
    margin: 0 auto;
    text-align: center;
  }
</style>

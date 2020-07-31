<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="toggle">{{activo ? 'Desactivar' : 'Activar'}}</button>
    <transition name="fade" enter-active-class="animated tada" leave-active-class="animated bounceOutRight" >
      <div v-if="activo">
        <h3 class="mensaje">Mensaje con transition ... </h3>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      activo: false,
    }
  },
  methods: {
    toggle(){
      this.activo = !this.activo;
    }
  },
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
</style>

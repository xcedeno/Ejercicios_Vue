<template>
  <div class="efectos">
      <h1>Ejemplo con transiciones</h1>
      <button @click.prevent="muestraEfec">{{activo ? 'Ocultar' : 'Mostrar'}}</button>
      <transition name="transition_ejemplo">
          <router-view v-if="activo"></router-view>
      </transition>
  </div>
</template>

<script>
export default {
    name: 'Demo',
    data() {
        return {
            activo: false
        }
    },
    methods: {
        muestraEfec(){
            this.activo = !this.activo;
        }
    },
}
</script>

<style scoped>
    .transition_ejemplo-enter-active {
        transition: all .3s ease;
    }
    .transition_ejemplo-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .transition_ejemplo-enter, .transition_ejemplo-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
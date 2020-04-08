<template>
  <div class="efectos2">
      <h1>Ejemplo con transiciones, segunda parte</h1>
      <p>Transición usando opacity y padding</p>
      <button @click.prevent="muestraEfec2">{{activo2 ? 'Ocultar' : 'Mostrar'}}</button>
      <transition name="transition_opacity">
          <router-view v-if="activo2"></router-view>
      </transition>
      <hr>
      <p>Transición usando animaciones</p>
      <button @click.prevent="animando2">{{animar2 ? 'Ocultar' : 'Mostrar'}}</button>
      <transition name="transition_animacion">
          <router-view v-if="animar2"></router-view>
      </transition>
  </div>
</template>

<script>
export default {
    name: 'Demo2',
    data() {
        return {
            activo2: false,
            animar2: false
        }
    },
    methods: {
        muestraEfec2(){
            this.activo2 = !this.activo2;
        },
        animando2(){
            this.animar2 = !this.animar2;
        }
    },
}
</script>

<style scoped>
   .transition_opacity-enter-active,  
   .transition_opacity-leave-active {
       transition: opacity .5s;
       padding: 10px;
   }
   .transition_opacity-enter, 
   .transition_opacity-leave-to {
       opacity: 0;
       padding: 10px;
   }
   .transition_opacity-enter-to,
   .transition_opacity-leave {
       opacity: 0.9;
       padding: 0px;
   }
   .transition_animacion-enter-active {
       animation: entrada 0.4s;
   }
   .transition_animacion-leave-active {
       animation: salida 0.4s;
   }
   @keyframes entrada {
       0% {
           transform: scale(2);
       }
       50% {
           transform: scale(1.5);
       }
       100% {
           transform: scale(1);
       }
   }
   @keyframes salida {
       0% {
           transform: scale(1);
       }
       50% {
           transform: scale(1.5);
       }
       100% {
           transform: scale(2);
       }
   }
</style>
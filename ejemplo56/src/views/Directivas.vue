<template>
  <div>
      <h2>Directivas personalizadas</h2>
      <div v-ancho>
          <p>Bloque con directiva personalizada</p>
          <p v-sizeTexto="'20px'">Texto con directiva personalizada</p>
          <p v-colores="'white'">Texto con directiva global</p>
      </div>
      <p>Valor: <span>{{$store.getters.getConteo(2)}}</span></p>
      <button @click="contar">+</button>
  </div>
</template>

<script>
export default {
    name: 'Directivas',
    directives: {
        ancho(el){
            el.style.background = "gray";
        },
        sizeTexto(el,binding){
            el.style.fontSize = binding.value;
        }
    },
    methods: {
        contar(){
            this.$store.commit('contando',1);
        }
    },
}
</script>

<style>

</style>
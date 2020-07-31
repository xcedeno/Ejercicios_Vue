<template>
  <div>
      <h2>Directivas personalizadas</h2>
      <div v-ancho>
          <p>Bloque con directiva personalizada</p>
          <p v-sizeTexto="'20px'">Texto con directiva personalizada</p>
          <p v-colores="'white'">Texto con directiva global</p>
      </div>
      <p>Valor: <span>{{$store.getters[`ob1/getConteo`]}}</span></p>
      <button @click="contar">+</button>
      <hr>
      <p>Trabajando con Vuex desde modulo - Propiedad Computada</p>
      <div>
          <input type="text" v-model="texto">
      </div>
      <p>Mensaje: <span>{{$store.getters['ob3/getMensaje']}}</span></p>
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
            this.$store.commit('ob1/contando',1);
        }
    },
    computed: {
        texto: {
            set(valores){
                this.$store.dispatch('ob3/mensajeActions',valores)
            },
            get(){
               return this.$store.getters['ob3/getMensaje']
            }
        }
    },
}
</script>

<style>

</style>
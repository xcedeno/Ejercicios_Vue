<template>
  <div>
      <h1 v-text="tituloEntrada"></h1>
      <p>Nombre de la ruta actual: {{ $route.name }}</p>
      <router-link to="paginar(false)">Anterior |</router-link>
      <router-link to="paginar(true)"> Siguiente</router-link>
      <br>
      <router-link :to="{name: 'Comentarios'}">Ver comentarios</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    methods: {
        paginar(parametro){
            let entrada = parseInt(this.$route.params.entrada);
            if (parametro) {
                return entrada < 10 ? `/blog/${entrada+1}` : `/blog/${entrada}`
            } else {
                return entrada > 1 ? `/blog/${entrada-1}` : `/blog/${entrada}`
            }
        }
    },
    computed: {
        tituloEntrada(){
            return `Entrada ${this.$route.params.entrada} del Blog`
        }
    }, 
}
</script>

<style>

</style>
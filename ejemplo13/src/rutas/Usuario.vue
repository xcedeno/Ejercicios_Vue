<template>
  <div>
      <p v-text="tipo_usuario"></p>
  </div>
</template>

<script>
export default {
    name: 'Usuario_Base',
    props: ['usuario'],
    computed: {
        tipo_usuario(){
            return `El usuario ingresado es ${this.usuario}`
        }
    }, 
}
</script>
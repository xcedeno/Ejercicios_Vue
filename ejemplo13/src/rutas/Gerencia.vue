<template>
  <div>
      <p v-html="gerente_usuario"></p>
  </div>
</template>

<script>
export default {
    name: 'Gerencia',
    props: ['user_gerencia'],
    computed: {
        gerente_usuario(){
            return `El usuario de gerencia es ${this.user_gerencia}`
        }
    },
}
</script>
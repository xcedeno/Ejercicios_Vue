<template>
  <div>
    <form>
      <slot name="titulo"></slot>
      <slot name="elementos"></slot>
      <slot name="boton"></slot>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Formulario',
}
</script>

<style scoped>

</style>

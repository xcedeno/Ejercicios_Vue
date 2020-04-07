<template>
  <div class="imagen">
      <img :src="src" alt="imagen del gato">
  </div>
</template>

<script>
export default {
  name: 'CompoImg',
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .imagen {
    margin-top: 10px;
  }
</style>

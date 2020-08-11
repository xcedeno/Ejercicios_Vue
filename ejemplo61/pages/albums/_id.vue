<template>
  <div>
      <h1>Desde ruta albums {{$route.params}} - {{$route.path}}</h1>
  </div>
</template>

<script>
export default {
    name: 'Albums',
    created() {
        console.log(this.$route.params.id)
    },
}
</script>

<style>

</style>
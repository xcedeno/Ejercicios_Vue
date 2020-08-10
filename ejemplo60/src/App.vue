<template>
  <div id="app">
    <notifications group="foo" />
    <Sala/>
  </div>
</template>

<script>
import Sala from './components/Sala.vue'

export default {
  name: 'App',
  components: {
    Sala
  }
}
</script>

<style>

</style>

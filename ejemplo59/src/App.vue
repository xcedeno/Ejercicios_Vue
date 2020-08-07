<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheFooter
  }
}
</script>
<style>

</style>

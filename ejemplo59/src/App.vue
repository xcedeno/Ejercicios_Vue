<template>
  <div id="app">
    <the-nav></the-nav>
    <router-view/>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from './components/TheFooter.vue';
import TheNav from './components/TheNav.vue';

export default {
  name: 'App',
  components: {
    TheFooter,
    TheNav
  }
}
</script>
<style>

</style>

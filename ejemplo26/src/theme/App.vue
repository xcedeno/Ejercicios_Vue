<template>
  <div id="app">
    <AppHeader></AppHeader>
    <section class="main-section section">
      <router-view></router-view>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  }
};
</script>

<style scoped>
 .espacios {
   padding: 0px 10px;
   margin: 10px;
 }
</style>
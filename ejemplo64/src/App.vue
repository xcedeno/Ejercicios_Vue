<template>
  <div id="app">
    <HeaderBar />
    <div class="main-section columns">
      <nav-bar></nav-bar>
      <main class="column">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';
import  NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: { 
    HeaderBar,
    NavBar
  },
};
</script>

<style lang="scss">
@import '@/design/index.scss';
</style>

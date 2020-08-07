<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HomePage/>
  </div>
</template>

<script>
import HomePage from '@/components/HomePage.vue';
import '../assets/css/style.css';

export default {
  name: 'Home',
  components: {
    HomePage
  }
}
</script>

<style>
  
</style>
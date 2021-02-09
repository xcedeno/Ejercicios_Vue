<template>
  <div>
    <div>
      <TheNavBar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue';

export default {
  components: {
    TheNavBar
  },
  created() {
    this.$store.dispatch('infoApi');
  }
}
</script>

<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

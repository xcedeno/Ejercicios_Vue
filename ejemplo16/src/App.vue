<template>
  <div id="app">
    <transition name="vista">
      <router-view :to="{name: 'Inicio'}"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
.vista-enter-active, .vista-leave-active {
    transition: opacity .1s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
</style>

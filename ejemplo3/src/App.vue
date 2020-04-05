<template>
  <div id="app">
    <p>{{mensaje | mayusculas}}</p>
    <p>{{mensaje | mayusculas2}}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      mensaje: "saludos desde la data del vuejs"
    }
  },
}
</script>


<style>
  body {
    background: #aabbcc;
  }
</style>

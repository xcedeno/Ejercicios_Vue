<template>
  <div id="app">
    <navegation></navegation>
    <router-view class="container" :users="users"/>
  </div>
</template>

<script>
import Navegation from '@/components/Navegation.vue';
import db from '@/db/db';

export default {
  name: 'App',
  components: {
    Navegation
  },
  data() {
    return {
      users: null
    }
  },
  mounted() {
    db.collection("users").doc("P2pXb9II3lPAEVoGGmSu").get().then(response => {
      console.log(response.data())
      this.users = response.data().name;
    })    
  },  
}
</script>

<style lang="scss">
$primary: #05b2dd;
@import "../node_modules/bootstrap/scss/bootstrap";
</style>

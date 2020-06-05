<template>
  <div id="app">
    <navegation></navegation>
    <router-view class="container" :users="users" @logout="logout"/>
  </div>
</template>

<script>
import Navegation from '@/components/Navegation.vue';
import firebase from 'firebase';
//import db from '@/db/db';

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
  methods: {
    logout(){
      firebase.auth().signOut().then(()=>{
        this.users = null;
        this.$router.push('/login');
      })
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user){
        //this.users = user.email;
        this.users = user.displayName;
      }
    });
/*     db.collection("users").doc("P2pXb9II3lPAEVoGGmSu").get().then(response => {
      console.log(response.data())
      this.users = response.data().name;
    })  */   
  },  
}
</script>

<style lang="scss">
$primary: #05b2dd;
@import "../node_modules/bootstrap/scss/bootstrap";
</style>

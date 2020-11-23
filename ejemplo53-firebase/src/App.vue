<template>
  <div id="app">
    <navegation  :users="users" @logout="logout"></navegation>
    <router-view class="container" :meetings="meetings" :users="users" @logout="logout" @addMeeting="addMeeting" @deleteMeeting="deleteMeeting" @checkIn="checkIn" :error="error"/>
    <div v-if="activo" class="d-flex justify-content-center mt-5 pt-3">
      <div class="spinner-border text-info" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import Navegation from '@/components/Navegation.vue';
import firebase from 'firebase';
import {db} from './main';

export default {
  name: 'App',
  components: {
    Navegation
  },
  data() {
    return {
      users: [],
      meetings: [],
      error: [],
      activo: false
    }
  },
  methods: {
    logout(){
      firebase.auth().signOut().then(()=>{
        this.users = [];
        this.meetings = [];
        this.$router.push('Login');
      })
    },
    addMeeting(recibido){
      db.collection("users").doc(this.users.uid).collection("meetings").add({
        name: recibido,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      alert("Cargado en base de datos");
    },
    deleteMeeting(id){
      db.collection("users").doc(this.users.uid).collection("meetings").doc(id).delete();
    },
    checkIn(datos){
      this.activo = true;
      console.log(datos);
      db.collection("users").doc(datos.userID).collection("meetings").doc(datos.meetingsID).get().then(documento=>{
        if(documento.exists){
          db.collection("users").doc(datos.userID).collection("meetings").doc(datos.meetingsID).collection("atenciones").add({
            name: datos.name,
            email: datos.email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          }).then(()=> {
            this.activo = false;
            this.$router.push('/attendees/'+datos.userID+'/'+datos.meetingsID);
          })
        }else{
          this.error.push('Lo sentimos, no existe el evento')
        }
      })
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user){
        //this.users = user.email;
        //this.users = user.displayName;
        this.users = user; //pasando toda la informacion del usuario
        db.collection("users").doc(this.users.uid).collection("meetings").onSnapshot(result=>{
          let auxiliar = [];
          result.forEach(doc=>{
            auxiliar.push({
              id: doc.id,
              name: doc.data().name
            })
          });
          this.meetings = auxiliar.sort((a,b)=>{
            if (a.name.toLowerCase() < b.name.toLowerCase())
            return -1
            return 1
          })
        })
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

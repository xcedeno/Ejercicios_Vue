<template>
  <div>
 <form class="mt-3" @submit.prevent="login">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="card bg-light">
              <div class="card-body">
                <h3 class="font-weight-light mb-3">Log in</h3>
                <section class="form-group">
                  <div v-if="error[0]" class="col-12 alert alert-danger px-3" >
                    <ul>
                      <li v-for="(item, index) in error" :key="index"> {{item}}</li>
                    </ul>
                  </div>
                  <label class="form-control-label sr-only" for="Email">Email</label>
                  <input class="form-control" type="email" id="email" placeholder="Email" v-model="email" />
                </section>
                <section class="form-group">
                  <input class="form-control" type="password" placeholder="Password" v-model="password" />
                </section>
                <div class="form-group text-right mb-0">
                  <button class="btn btn-primary" type="submit">Log in</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <p class="text-center mt-2">
      or
      <router-link to="/register">Register |</router-link>
      <a href="#" @click="recuperar" title="Para recuperar la contraseña debe indicar el correo electrónico registrado"> Recuperar Contraseña</a>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data() {
      return {
          email: '',
          password: '',
          error: []
      }
  },
  methods: {
      login(){
          this.error = [];
          const expresion = /\w+@\w+\.+[a-z]/;

          if(!expresion.test(this.email)){
            this.error.push("Debe ingresar un correo electrónico valido");
          }else if (!this.email || !this.password){
            this.error.push("Debe ingresar datos para poder continuar");
          } else {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
              .then((respon)=>{
                  console.log(respon.user.refreshToken)
                  console.log(respon.user.displayName)
                  console.log(respon.user.email)
                  console.log(respon.user.emailVerified)
                  console.log(respon.user.photoURL)
                  console.log(respon.user.isAnonymous)
                  console.log(respon.user.uid)
                  console.log(respon.user.providerData)
  
                  this.$router.push("Meetings");
                  this.error = [];
              })
              .catch(error=> {
                  console.error(error.message);
                  this.error.push("El usuario y/o la contraseña no son validos");
              })
          }
      },
      recuperar(){
        this.error = [];
          const expresion = /\w+@\w+\.+[a-z]/;

          if(!expresion.test(this.email)){
            this.error.push("Debe ingresar un correo electrónico valido");
          }else if (!this.email){
            this.error.push("Debe ingresar el correo electórnico registrado para poder continuar");
          } else {
            firebase.auth().sendPasswordResetEmail(this.email)
              .then(()=>{
                alert("Correo electrónico enviado")
                this.error = [];
              })
              .catch(error=> {
                  console.error(error.message);
                  this.error.push("No hay registro de usuario correspondiente a este identificador. El usuario puede haber sido eliminado");
              })
          }
      }
  },
}
</script>
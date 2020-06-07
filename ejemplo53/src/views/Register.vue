<template>
  <div >
    <form class="mt-3" @submit.prevent="register">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card bg-light">
              <div class="card-body">
                <h3 class="font-weight-light mb-3">Register</h3>
                <div class="form-row">
                  <div v-if="error[0]" class="col-12 alert alert-danger px-3" >
                    <ul>
                      <li v-for="(item, index) in error" :key="index"> {{item}}</li>
                    </ul>
                  </div>
                  <section class="col-sm-12 form-group">
                    <label class="form-control-label sr-only" for="displayName">Display Name</label>
                    <input class="form-control" type="text" id="displayName" placeholder="Display Name" name="displayName" v-model="displayName" />
                  </section>
                </div>
                <section class="form-group">
                  <label class="form-control-label sr-only" for="email">Email</label>
                  <input class="form-control" type="email" id="email" placeholder="Email Address" name="email" v-model="email"
                  />
                </section>
                <div class="form-row">
                  <section class="col-sm-6 form-group">
                    <input class="form-control" type="password" placeholder="Password" v-model="passOne"
                    />
                  </section>
                  <section class="col-sm-6 form-group">
                    <input class="form-control" type="password" placeholder="Repeat Password" v-model="passTwo"
                    />
                  </section>
                </div>
                <div class="form-group text-right mb-0">
                  <button class="btn btn-primary" type="submit">Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <p class="text-center mt-2">
      or
      <router-link to="/login">login</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Register',
  data() {
    return {
      email: null,
      error: [],
      passOne: null,
      passTwo: null,
      displayName: null
    }
  },
  watch: {
    passTwo(){
      if (this.passOne && this.passTwo && this.passTwo === this.passOne){
        this.error = [];
      } else if (this.error.length == 0) {
        this.error.push("Las contraseñas deben ser iguales");
      }
    }
  },
  methods: {
    register() {
      this.error = [];
      const expresion = /\w+@\w+\.+[a-z]/;
      const expresionNombre = /^[a-zA-ZáÁéÉíÍóÓúÚñÑüÜ\s]/;

      if(!expresion.test(this.email)){
        this.error.push("Debe ingresar un correo electrónico valido");
      }else if (this.passTwo !== this.passOne){
        this.error.push("Las contraseñas deben ser iguales");
      }else if (!this.email || !this.displayName || !this.passOne || !this.passTwo){
        this.error.push("Debe ingresar datos para poder continuar");
      } else if (this.displayName.length < 2 || !expresionNombre.test(this.displayName)) {
        this.error.push("Debe ingresar un nombre valido");
      } else if (this.error[0]) {
        this.error.push("Debe solucionar los errores indicados");
      } else {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.passOne).then(response => {
          return response.user.updateProfile({
            displayName: this.displayName
          }).then(() => {
            this.error = [];
            this.$router.replace('Home');
          })
        }).catch(error=>{
            console.error(error);
          if (error.code == "auth/weak-password") {
            this.error.push("La contraseña debe tener al menos 6 caracteres.");
          } else if(error.code == "auth/email-already-in-use") {
            this.error.push("La dirección de correo electrónico ya está en uso por otra cuenta.");
          }else{
            this.error.push("Error al tratar de registrar al usuario.");
          }
        })
      } 
    }
  },
}
</script>
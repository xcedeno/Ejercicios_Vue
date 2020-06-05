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
                  <div v-if="error" class="col-12 alert alert-danger px-3">
                    {{ error }}
                  </div>
                  <label class="form-control-label sr-only" for="Email">Email</label>
                  <input required class="form-control" type="email" id="email" placeholder="Email" v-model="email" />
                </section>
                <section class="form-group">
                  <input required class="form-control" type="password" placeholder="Password" v-model="password" />
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
      <router-link to="/register">Register</router-link>
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
          error: ''
      }
  },
  methods: {
      login(){
          const infoUser = {
            email: this.email,
            password: this.password
          };

          firebase.auth().signInWithEmailAndPassword(infoUser.email, infoUser.password)
            .then((respon)=>{
                console.log(respon.user.refreshToken)
                console.log(respon.user.displayName)
                console.log(respon.user.email)
                console.log(respon.user.emailVerified)
                console.log(respon.user.photoURL)
                console.log(respon.user.isAnonymous)
                console.log(respon.user.uid)
                console.log(respon.user.providerData)

                this.$router.push("Meetings")
            })
            .catch(error=> {
                console.error(error.message);
                this.error = error.message;
            })
      }
  },
}
</script>
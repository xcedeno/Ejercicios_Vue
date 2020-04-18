<template>
  <div>
      <div v-if="getValueAutorizado">
          <h1>Bienvenido Usuario</h1>
          <!-- <p>Nombre: {{profile.firstName}}</p> -->
          <button @click.prevent="close" class="button is-primary is-hovered">Logout</button>
      </div>
      <div v-else>
        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="User" v-model="username">
                <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password" v-model="password"/>
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control">
                <button @click.prevent="login" class="button is-success">Login</button>
            </p>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
            profile: {}
        }
    },
    computed: {
        ...mapGetters(['getValueAutorizado'])
    },
    methods: {
        ...mapActions(['close']),
        login(){
            this.$store.dispatch('login',{username: this.username, password: this.password,}).then(()=>{
                this.username = '';
                this.password = '';
            })
        },
    },
/*     created() {
        let expiration = window.localStorage.getItem('tokenExpiration');
        console.log(expiration);
        let tiempo = new Date().getTime() / 1000;
        console.log(tiempo);
        if (expiration !== null & parseInt(expiration) - tiempo > 0) {
            //this.autorizado = true;
        }
    }, */
    watch: {
/*         autorizado(valor){
            console.log(valor);
            if (valor) {
                appServe.getProfile()
                    .then(response => {
                        console.log(response);
                        this.profile = response;
                    })
                    .catch(error =>{console.error(error);})
            } else {
                this.profile = {}
            }
        } */
    },
}
</script>

<style>

</style>
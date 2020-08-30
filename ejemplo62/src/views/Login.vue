<template>
  <div class="">
    <div class="clearfix">
        <b-img class="imagen__login" left src="https://logos.flamingtext.com/Word-Logos/productos-design-girls-name.png" alt="Center image"></b-img>
    </div>
    <div class="container borde__form__login">
        <b-form @submit.prevent="login">
            <h2 class="text-center">Login Usuarios</h2>
            <b-form-group id="input-group-1" label="Email" label-for="input-1">
                <b-form-input id="input-1" v-model="username" type="email" required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Contraseña" label-for="input-2">
                <b-form-input id="input-2" v-model="password" type="password" required></b-form-input>
            </b-form-group>
            <p class="text-center">Ingrese sus credenciales de usuario</p>
            <b-button type="submit" variant="primary" block>Ingresar</b-button>
        </b-form>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            password: '',
            username: '',
        }
    },
    mounted() {
         this.$store.dispatch("paginaActiva",false);
    },
    methods: {
        login(){
            let patterCorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/gmi;
            
            if (this.password && this.username && patterCorreo.test(this.username)) {
                let datosLogin = {
                    password: this.password,
                    username: this.username
                }
                this.$store.dispatch('probandoLogin',datosLogin);
            } else {
                alert("Datosa erroneos");
            }
        }
    },
}
</script>

<style lang="scss">
    .imagen__login{
        width: 300px;
        margin: 20px 0px;
    }
    .borde__form__login{
        border: 1px solid rgb(150, 150, 150);
        padding: 10px;
        width: 300px;
    }
</style>
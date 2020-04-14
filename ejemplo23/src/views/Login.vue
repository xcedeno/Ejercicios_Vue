<template>
  <div class="container my-3">
    <p>Login - Ingrese sus datos</p>
    <button type="button" class="btn btn-primary" @click="signup">Registrarse</button>
    <b-form @reset="onReset" v-if="show" class="my-3">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            show: true,
            form: {
                email: '',
                name: '',
            },
        }
    },
    methods: {
        onReset(evt) {
        evt.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
            this.show = true
            })
        },
        signup(){
            this.$router.push('/registro');
        }
    },
}
</script>
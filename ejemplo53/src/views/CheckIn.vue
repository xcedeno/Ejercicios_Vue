<template>
  <div>
    <form class="mt-3" @submit.prevent="checkIN">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="card bg-light">
            <div class="card-body">
              <h3 class="font-weight-light mb-3">Check in</h3>
              <section class="form-group">
                  <div v-if="errors[0]" class="col-12 alert alert-danger px-3" >
                    <ul>
                      <li v-for="(item, index) in errors" :key="index"> {{item}}</li>
                    </ul>
                  </div>
                <label class="form-control-label sr-only" for="displayName">Name</label>
                <input class="form-control" type="text" placeholder="Name" v-model="name"/>
              </section>
              <section class="form-group">
                <label class="form-control-label sr-only" for="Email">Email</label>
                <input class="form-control" type="email" placeholder="Email" v-model="email"/>
              </section>
              <div class="form-group text-right mb-0">
                <button class="btn btn-primary" type="submit">Check in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  </div>
</template>

<script>
export default {
    name: 'CheckIn',
    props: ['error'],
    data() {
        return {
            name: '',
            email: '',
            errors: []
        }
    },
    methods: {
        checkIN(){
            console.log(this.$route.params.meetingsID);
            this.errors = [];
            if(this.error[0]){
                this.errors.push(this.error[0])
            }
            const expresion = /\w+@\w+\.+[a-z]/;
            const expresionNombre = /^[a-zA-ZáÁéÉíÍóÓúÚñÑüÜ\s]/;

            if(!expresion.test(this.email)){
                this.errors.push("Debe ingresar un correo electrónico valido");
            }else if (!this.email || !this.name){
                this.errors.push("Debe ingresar datos para poder continuar");
            } else if (this.name.length < 2 || !expresionNombre.test(this.name)) {
                this.errors.push("Debe ingresar un nombre valido");
            } else if (this.errors[0]) {
                this.errors.push("Debe solucionar los errores indicados");
            } else {
                this.$emit('checkIn',{
                    userID: this.$route.params.usersID,
                    meetingsID: this.$route.params.meetingsID,
                    name: this.name,
                    email: this.email
                });
                this.email = '';
                this.name = '';
                this.errors = [];
            }
        }
    },
}
</script>

<style>

</style>
<template>
  <div class="hello">
    <p>{{$parent.$data.texto}}</p>
    <h3>Utilizando Vuelidate</h3>
    <form>
      <label for="nombre">Ingrese el nombre aquí: </label>
      <input v-model.trim="$v.nombre.$model" type="text" placeholder="Ingrese su nombre...">
      <br>
      <div class="error" v-if="!$v.nombre.required">El campo es requerido</div>
      <div class="error" v-if="!$v.nombre.minLength">El nombre debe contener por lo menos {{$v.nombre.$params.minLength.min}} letras.</div>
      <br>
      <label for="edad">Ingrese su edad aquí: </label>
      <input v-model.number.trim.lazy="$v.edad.$model" type="number" placeholder="Ingrese su edad...">
      <div class="error" v-if="!$v.edad.between">La edad debe estar comprendida entre {{$v.edad.$params.between.min}} y {{$v.edad.$params.between.max}}</div>
    </form>
    <p>------------------------</p>
    <h3>Utilizando Vuelidate con Submit</h3>
    <div v-if="error">
      <div class="error" v-if="!$v.nombre2.required">El campo Nombre es requerido</div>
      <div class="error" v-if="!$v.nombre2.minLength">El nombre debe contener por lo menos {{$v.nombre2.$params.minLength.min}} letras.</div>
      <div class="error" v-if="!$v.nombre2.required">El campo Edad es requerido</div>
      <div class="error" v-if="!$v.edad2.between">La edad debe estar comprendida entre {{$v.edad2.$params.between.min}} y {{$v.edad2.$params.between.max}}</div>
    </div>
    <form @submit.prevent="enviando">
      <div>
        <label for="nombre2">Ingrese el nombre aquí: </label>
        <input v-model.trim="$v.nombre2.$model" type="text" placeholder="Ingrese su nombre...">
      </div>
      <div>
        <label for="edad2">Ingrese su edad aquí: </label>
        <input v-model.number.trim.lazy="$v.edad2.$model" type="number" placeholder="Ingrese su edad...">
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  name: 'Componente',
  data() {
    return {
      nombre: '',
      edad: '',
      nombre2: '',
      edad2: '',
      error: false,
    }
  },
  validations: {
    nombre: { 
      required,
      minLength: minLength(2) 
    },
    edad: {
      required,
      minLength: minLength(2),
      between: between(18,50)
    },
    nombre2: { 
      required,
      minLength: minLength(2) 
    },
    edad2: {
      required,
      minLength: minLength(2),
      between: between(18,50)
    }
  },
  methods: {
    enviando(){
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.error = true;
      } else {
        alert("Enviado...");
        console.log("enviado")
        this.error = false;
        this.nombre2 = '';
        this.edad2 = '';
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.error{
  color: red;
  background-color: rgb(237, 239, 240);
  width: 30%;
  text-align: center;
  margin: 10px auto;
  padding: 10px;
  font-size: 16px;
}
</style>

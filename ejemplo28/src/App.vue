<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/lista_img.png" class="imagen">
    <h3>Lista de Actividades por hacer...</h3>
    <p>Ingresa la actividad que debes hacer</p>
    <input type="text" v-model="lista" placeholder="Ingresa aqui la actividad por realizar">
    <button @click.prevent="agregando">Agregar</button>
    <div v-show="errores">
      <h5>Errores encontrados</h5>
      <p v-text="errores" class="errores"></p>
    </div>
    <div v-if="this.$store.getters.getItems && this.$store.getters.getItems.length > 0">
      <h5>Tareas por realizar hoy:</h5>
      <ul>
        <li v-for="(tarea, index) in this.$store.getters.getItems" :key="index">
          {{tarea.title}} | <button type="button" @click.prevent="eliminar(tarea.id)">Eliminar</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { db } from "./main";

export default {
  name: 'App',
  data() {
    return {
      lista: '',
      errores: null
    }
  },
  methods: {
    agregando(){
      if (this.lista != '') {
        console.log(this.lista);
        db.collection('items').add({
          title: this.lista,
          createAt: Date.now()
        }).then((response) => {
          if (response) {
            this.lista = ''
          }
        }).catch((error)=>{
          console.error(error);
          this.errores = error;
        });
        this.errores = '';
      } else {
        this.errores = "Debe ingresar una actividad por hacer"
      }
    },
    eliminar(idTarea){
      console.log(idTarea);
      if (idTarea) {
        db.collection('items').doc(idTarea).delete()
          .then(()=>{
            console.log("Elemento eliminado de la base de datos");
          })
          .catch((error)=>{
            console.error(error);
            this.errores = error;
          });
      }else{
        this.errores = "No hay ID por borrar"
      }
    }
  },
  beforeCreate() {
    this.$store.dispatch("setItems");
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  font-size: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.imagen {
  width: 25%;
}

input, button {
  widows: 100%;
  margin: 5px 10px;
  padding: 10px;
}

input::placeholder {
  font-size: 12px;
}

button {
  background-color: aqua;
}

button:hover {
  background-color: rgba(79, 79, 124, 0.342);
  cursor: pointer;
}
.errores {
  background-color: lightcoral;
  font-weight: bold;
}
</style>

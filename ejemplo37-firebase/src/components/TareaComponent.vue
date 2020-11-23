<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Agregar una tarea" aria-label="Agregar una tarea" aria-describedby="basic-addon2" @keyup.enter.prevent.stop="agregar" v-model="tareaNueva">
    <div>
      <button class="btn btn-primary" id="basic-addon2" @click.prevent.stop="agregar">Agregar</button>
    </div>
  </div>
</template>

<script>
import {bus} from '../main.js';
import { db } from "../main.js";

export default {
  name: 'TareaComponent',
  data() {
    return {
      tareaNueva: '',
    }
  },
  props: {
    tareas: {
      type: Array,
      require: true
    }
  },
  methods: {
    agregar(){
      var recibido = this.tareaNueva.trim();
      if (recibido) {
        bus.contando(this.tareas.length);
        db.collection('tareas').add({
          evento: recibido,
          terminada: false,
          creado: Date.now()
        }).then((response) => {
          if (response) {
            this.tareaNueva = '';
          }
        }).catch((error)=>{
          console.error(error);
          this.errores = error;
        });
      } else {
        alert("Debe ingresar una tarea por realizar");
      }
    }
  },
  created() {
    bus.contando(this.tareas.length);
  },
}
</script>
<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Agregar una tarea" aria-label="Agregar una tarea" aria-describedby="basic-addon2" @keyup.enter="agregar" v-model="tareaNueva">
    <div>
      <button class="btn btn-primary" id="basic-addon2" @click="agregar">Agregar</button>
    </div>
  </div>
</template>

<script>
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
        this.tareas.push({evento: recibido, terminada: false});
        this.tareaNueva = '';
      } else {
        alert("Debe ingresar una tarea por realizar");
      }
    }
  },
}
</script>
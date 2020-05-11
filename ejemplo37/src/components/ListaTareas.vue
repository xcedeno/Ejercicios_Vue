<template>
  <div>
      <ul class="list-group">
        <li v-for="(item, index) in tareas" :key="index" class="list-group-item d-flex justify-content-between align-items-center" :class="{texto: item.terminada}">
            {{item.evento}}
            <span>
                <button class="mx-2 d-inline btn btn-success button-small" @click="actualTarea(index)"><font-awesome-icon icon="check" /></button><button class="d-inline btn btn-danger button-small" @click="borrar(item.id)"><font-awesome-icon icon="times" /></button>
            </span>
        </li>
      </ul>
  </div>
</template>

<script>
import { db } from "../main.js";

export default {
    name: 'ListaTareas',
    props: {
        tareas: {
            type: Array,
            required: true
        }
    },
    methods: {
        actualTarea(index){
            let cambioTarea = this.tareas[index].terminada = !this.tareas[index].terminada;
            let idTarea = this.tareas[index].id;
            db.collection('tareas').doc(idTarea).update({
                terminada: cambioTarea
            })
            .then(()=>{
                console.log("Elemento actulizado");
            })
            .catch(error => {
                console.error(error);
            })
        },
        borrar(idTarea){
            console.log(idTarea);
            if (idTarea) {
                this.$emit("quitar");
                db.collection('tareas').doc(idTarea).delete()
                .then(()=>{
                    console.log("Elemento eliminado de la base de datos");
                })
                .catch((error)=>{
                    console.error(error);
                });
            } else {
                console.log("Error al intentar borrar");
            }
        },
    },
}
</script>

<style scoped>
.texto {
    text-decoration-line: line-through;
    color: rgba(255, 100, 100, 0.8)
}
</style>
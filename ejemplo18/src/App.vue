<template>
  <div>
    <h1>Usando propiedades computadas</h1>
    <p>Ejercicios basicos de funcionamiento</p>
    <hr>
    <p>Ejemplo 1</p>
    Nombre: <input type="text" v-model="nombre"><br>
    Apellido: <input type="text" id="apellido" value="Duran"><br>
    <button @click="guardar">Guardar Apellido</button>
    <output>{{cambiarDatos}}</output>
    <hr>
    <p>Ejemplo 2</p>
    <table class="table table-striped">
    <thead>
        <tr>
            <th>#</th>
            <th>Capital</th>
            <th>Pais</th>
            <th>Población</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(item, index) in poblacionOrdenada" :key="index">
            <th>{{index+1}}</th>
            <td>{{item.capital}}</td>
            <td>{{item.pais}}</td>
            <td>{{item.poblacion}}</td>
        </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
let apellido = "Duran";

export default {
    name: 'App',
    data() {
        return {
            nombre: "Juan",
            datos: [
                {capital:"Caracas",pais:"Venezuela",poblacion:"30000000"},
                {capital:"Santiago de Chile",pais:"Chile",poblacion:"19000000"},
                {capital:"Bogota",pais:"Colombia",poblacion:"50000000"},
                {capital:"Peru",pais:"Lima",poblacion:"20000000"},
            ]
        }
    },
    methods: {
        guardar(){
            apellido = this.$el.querySelector("#apellido").value;
        }
    },
    computed: {
        cambiarDatos(){
            return `${this.nombre} ${apellido}`;
        },
        poblacionOrdenada(){
            return this.datos.sort((v1,v2) => v2.poblacion - v1.poblacion);
        }
    },
}
</script>

<style>
div {
    background-color: azure;
    font-size: 18px;
}
</style>
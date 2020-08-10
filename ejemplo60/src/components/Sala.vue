<template>
  <div class="container text-center">
    <div class="pantalla mt-5">
      <h2 class="text-white">Pantalla</h2>
    </div>
    <div class="asientos mt-5">
      <div class="row">
        <div class="col text-white font-weight-bold m-3" v-for="(asiento,index) in asientos" :key="index" v-text="asiento.id" :class="[asiento.disponible ? 'disponible' : 'ocupado', {'asiento': !asiento.adquirido},{'asiento2' : asiento.userId != null && asiento.userId != idUser}]" @click="selecionAsiento" :id="asiento.id"></div>
      </div>
    </div>
    <div>
      <b-button :disabled="contador == 0" variant="success" @click="guardar" class="mt-5 mx-3">Guardar</b-button>
      <b-button :disabled="contador == 0" variant="danger" @click="cancelar" class="mt-5 mx-3">Cancelar</b-button>
      <b-button variant="warning" @click="liberar" class="mt-5 mx-3">Liberar</b-button>
    </div>
    <div class="mt-5">
      <strong>Asientos Seleccionados: {{contador}}</strong>
      <b-progress :value="contador" :max="max" show-progress animated></b-progress>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Sala',
    data() {
      return {
        idUser: '',
        contador: 0,
        max: 6,
        asientos: [
/*           {
            id: 'A1',
            disponible: true
          },
          {
            id: 'A2',
            disponible: true
          },
          {
            id: 'A3',
            disponible: true
          },
          {
            id: 'A4',
            disponible: true
          },
          {
            id: 'A5',
            disponible: true
          },
          {
            id: 'A6',
            disponible: true
          }, */
        ]
      }
    },
    methods: {
      cancelar(){
        this.asientosSeleccionados().forEach(asiento=>{
          console.log(asiento);
          asiento.disponible = true;
          asiento.userId = null;
        })
        this.contador = 0;
        this.actualizarElementos();
      },
      liberar(){
        this.asientos.forEach(element => {
          element.disponible = true;
          element.adquirido = false;
          element.userId = null;
        });
        this.contador = 0;
        this.actualizarElementos();
      },
      asientosSeleccionados(){
        return this.asientos.filter(ocupado => !ocupado.disponible && !ocupado.adquirido)
      },
      validarSientos(){
        this.asientosSeleccionados().forEach(asiento=>{
          asiento.adquirido = true;
        })
      },
      guardar(){
        this.contador = 0;
        firebase.database().ref('salas').child('sala1').transaction(
          (valoresDB)=>validarCompra(valoresDB),
          (error, committed, snapshot)=>this.validarRespuesta(error, committed, snapshot)
        )
        /* this.validarSientos();
        this.actualizarElementos(); */
      },
      validarRespuesta(error, committed, snapshot){
        if (error) {
          console.error(error);
          this.$notify({
            group: 'foo',
            type: 'error',
            title: 'Error',
            text: 'Existe en un error en la operación'
          });
        }  
        if (committed) {
            this.$notify({
              group: 'foo',
              type: 'success',
              title: 'Éxito',
              text: 'La operación se realizó con éxito...'
            });
        }
        console.log(snapshot)
      },
      validarCompra(valoresDB){
         this.asientosSeleccionados().forEach(asiento=>{
           if (valoresDB.find(a=>a.id === asiento.id).adquirido) {
             return
           }
          asiento.adquirido = true;
        })
        return this.asientos;
      },
      cargarDatos(data){
        this.asientos = data;
      },
      selecionAsiento(event){
        let asientoSeleccionado = this.asientos.find(item => item.id === event.target.id);

        if (!asientoSeleccionado.adquirido && !asientoSeleccionado.disponible && asientoSeleccionado.userId == this.idUser){
          asientoSeleccionado.userId = null;
          asientoSeleccionado.disponible = !asientoSeleccionado.disponible;
          this.contador = 0;
          this.actualizarElementos();
          return
        }

        if (asientoSeleccionado.adquirido || (asientoSeleccionado.userId != null && asientoSeleccionado.userId != this.idUser)) {
          this.$notify({
            group: 'foo',
            type: 'error',
            title: 'Error',
            text: 'No se puede seleccinar el asiento '+asientoSeleccionado.id
          });
          return
        }  
      
        asientoSeleccionado.disponible = !asientoSeleccionado.disponible;
        asientoSeleccionado.userId = this.idUser;
        this.actualizarElementos();
        this.contador = this.asientosSeleccionados().length;
      },
      actualizarElementos(){
        /* firebase.database().ref('/salas/sala1').set(this.asientos); */
        firebase.database().ref('salas').child('sala1').set(this.asientos).then( () => {
          console.log("Actualización finalizada");
        });
      },
    },
    created() {
      //this.actualizarElementos();
   /*    firebase.database().ref('salas').child('sala1').once('value', snapshot => {
     this.cargarDatos(snapshot.val()) */
      this.idUser = firebase.database().ref('/usuarios').push().key;
      firebase.database().ref('salas').child('sala1').on('value', snapshot => {
        this.cargarDatos(snapshot.val())
      });
    },
}
</script>

<style>
  .pantalla {
    background-color: #5d87be;
  }
  .asiento{
    cursor: pointer;
  }
  .asiento2{
    cursor: initial;
  }
  .disponible{
    background-color: rgb(33, 84, 131);
  }
  .ocupado{
    background-color: crimson;
  }
</style>
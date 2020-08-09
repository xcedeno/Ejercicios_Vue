<template>
  <div class="container text-center">
    <div class="pantalla mt-5">
      <h2 class="text-white">Pantalla</h2>
    </div>
    <div class="asientos mt-5">
      <div class="row">
        <div class="col text-white font-weight-bold m-3" v-for="(asiento,index) in asientos" :key="index" v-text="asiento.id" :class="[asiento.disponible ? 'disponible' : 'ocupado', {'asiento': !asiento.adquirido}]" @click="selecionAsiento" :id="asiento.id"></div>
      </div>
    </div>
    <div>
      <b-button variant="success" @click="guardar" class="mt-5 mx-3">Guardar</b-button>
      <b-button variant="warning" @click="liberar" class="mt-5">Liberar</b-button>
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
      liberar(){
        console.log("liberar");
        this.asientos.forEach(element => {
          element.disponible = true;
          element.adquirido = false;
          element.userId = null;
        });
        this.actualizarElementos();
      },
      asientosSeleccionados(){
        return this.asientos.filter(ocupado => !ocupado.disponible && !ocupado.adquirido)
      },
      validarSientos(){
        this.asientosSeleccionados().forEach(asiento=>{
          console.log(asiento);
          asiento.adquirido = true;
        })
      },
      guardar(){
        this.validarSientos();
        this.actualizarElementos();
      },
      cargarDatos(data){
        this.asientos = data;
      },
      selecionAsiento(event){
        let asientoSeleccionado = this.asientos.find(item => item.id === event.target.id);
        console.log(asientoSeleccionado);
        if (asientoSeleccionado.adquirido || (asientoSeleccionado.userId != null && asientoSeleccionado.userId != this.idUser)) {
          console.log("Asiento ocupado "+asientoSeleccionado.id);
          return
        }
        asientoSeleccionado.disponible = !asientoSeleccionado.disponible;
        asientoSeleccionado.userId = this.idUser;
        this.actualizarElementos();
      },
      actualizarElementos(){
        /* firebase.database().ref('/salas/sala1').set(this.asientos); */
        firebase.database().ref('salas').child('sala1').set(this.asientos, (error)=>{
          if (error) {
            console.error(error);
          } else {
            console.log("Operación correcta");
          }
        }).then( () => {
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
  .disponible{
    background-color: rgb(33, 84, 131);
  }
  .ocupado{
    background-color: crimson;
  }
</style>
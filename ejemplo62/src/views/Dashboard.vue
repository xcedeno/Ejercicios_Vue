<template>
  <div>
    <b-breadcrumb :items="items" class="mb-0 breadcrumb__color"></b-breadcrumb>
    <div class="border__jumbotron">
      <b-jumbotron class="text-center font-weight-bold" lead="Vitrina"></b-jumbotron>
      <h3 class="mt-0">Bienvenido</h3>
      <p>Bienvenido al sistema de Ordenes e Inventario de ClassicModels</p>
    </div>
    <div>
      <div class="row margenes__informacion">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-1">
          <div class="color__borde">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div v-if="$store.state.datosEnStore">
                  <radial-progress-bar class="mx-auto" :diameter="150" :completed-steps="100" :total-steps="porcentajeA.porcentaje" :startColor="'green'" :innerStrokeColor="'white'">
                    <p class="display-4">{{porcentajeA.porcentaje}}%</p>
                  </radial-progress-bar>
                </div>
                <div class="text-center">
                  <a href="#" target="_blank" rel="noopener noreferrer">Ver detalles</a>
                </div>
              </div>
              <div v-if="$store.state.datosEnStore" class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <p class="font-weight-bold text-center">{{porcentajeA.nombre | mayusculas}}</p>
                <div>
                  <div class="d-inline-block w-50">
                    <h2 class="text-center font-weight-bold">{{porcentajeA.entregadas}}</h2>
                    <p class="text-center">Ordenes <br> Entregadas</p>
                  </div>
                  <div class="d-inline-block w-50">
                    <h2 class="text-center font-weight-bold">{{porcentajeA.pendientes}}</h2>
                    <p class="text-center">Ordenes <br> Pendientes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-1">
          <div class="color__borde">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div v-if="$store.state.datosEnStore">
                  <radial-progress-bar class="mx-auto" :diameter="150" :completed-steps="100"  :total-steps="porcentajeB.porcentaje" :startColor="'green'" :innerStrokeColor="'white'">
                    <p class="display-4">{{porcentajeB.porcentaje}}%</p>
                  </radial-progress-bar>
                </div>
                <div class="text-center">
                  <a href="#" target="_blank" rel="noopener noreferrer">Ver detalles</a>
                </div>
              </div>
              <div v-if="$store.state.datosEnStore" class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <p class="font-weight-bold text-center">{{porcentajeB.nombre | mayusculas}}</p>
                <div>
                  <div class="d-inline-block w-50">
                    <h2 class="text-center font-weight-bold">{{porcentajeB.totales}}</h2>
                    <p class="text-center">Ordenes <br> Totales</p>
                  </div>
                  <div class="d-inline-block w-50">
                    <h2 class="text-center font-weight-bold">{{porcentajeB.atrasadas}}</h2>
                    <p class="text-center">Ordenes <br> Atrasadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <h3 class="font-weight-bold ml-4">Últimas Ordenes</h3>
          <table class="table table-hover table-borderless mt-5">
            <thead>
              <tr class="border-bottom">
                <td>N° Orden</td>
                <td>Cliente</td>
                <td>Fecha Entrega</td>
                <td>Estado</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in ultimasOrdenes" :key="index">
                <td>{{item.num_orden}}</td>
                <td>{{item.cliente}}</td>
                <td>{{item.fecha_entrega}}</td>
                <td>{{item.estado}}</td>
                <td><button>Ver Detalle</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import RadialProgressBar from 'vue-radial-progress';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    RadialProgressBar
  },
  data() {
    return {
      items: [
          {
            text: 'Home',
            active: true
          }
        ]
    }
  },
  filters: {
    mayusculas(valor){
      return valor.replace(/\b\w/g, texto => texto.toUpperCase());
    }
  },
  computed: {
    porcentajeA(){
      let entregadas = parseInt(this.$store.getters.enviandoKpis[0].entregadas);
      let pendientes = parseInt(this.$store.getters.enviandoKpis[0].pendientes);
      let nombre = this.$store.getters.enviandoKpis[0].nombre
      let porcentaje = ((entregadas*100)/(entregadas+pendientes));
      return {entregadas,pendientes,porcentaje,nombre};
    },
    porcentajeB(){
      let totales = parseInt(this.$store.getters.enviandoKpis[1].totales);
      let atrasadas = parseInt(this.$store.getters.enviandoKpis[1].atrasadas);
      let nombre = this.$store.getters.enviandoKpis[1].nombre
      let porcentaje = ((atrasadas*100)/(totales));
      return {totales,atrasadas,porcentaje,nombre};
    },
    ultimasOrdenes(){
      return this.$store.getters.enviandoUO;
    }
  },
  created() {
    this.$store.dispatch("paginaActiva",true);
  },
}
</script>

<style lang="css">
  .breadcrumb__color {
    background-color: white;
  }
  .border__jumbotron {
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
  }
  .color__borde{
    border: 1px solid black;
    border-radius: 10px;
    padding: 20px;
  }
  .margenes__informacion{
    margin: 0 -5px;
  }
</style>
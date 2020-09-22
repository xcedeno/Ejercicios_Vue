<template>
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
                <td></td>
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
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <h3 class="font-weight-bold ml-4">Últimas Devoluciones</h3>
          <table class="table table-hover table-borderless mt-5">
            <thead>
              <tr class="border-bottom">
                <td>N° Orden</td>
                <td>Cliente</td>
                <td>Fecha Devolución</td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in ultimasDevoluciones" :key="index">
                <td>{{item.num_orden}}</td>
                <td>{{item.cliente}}</td>
                <td>{{item.fecha_entrega | formatFecha}}</td>
                <td></td>
                <td><button>Ver Detalle</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'TablasDashBoard',
    computed: {
        ultimasOrdenes(){
            return this.$store.getters.enviandoUO;
        },
        ultimasDevoluciones(){
          return this.$store.getters.enviandoUD;
        }
    },
    filters: {
      formatFecha(valor){
        return valor.split('-').reverse().join('/');
      }
    }
}
</script>

<style lang="scss">
  button{
      color: rgb(76, 76, 248);
      background-color: rgb(159, 159, 235);
  }
</style>
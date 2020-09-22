<template>
  <div>
    <b-breadcrumb :items="items" class="breadcrumb__separador"></b-breadcrumb>
    <h3 class="font-weight-bold ml-4">Monitor de Órdenes</h3>
    <monitor/>
  </div>
</template>

<script>
import monitor from '../components/MonitorOrdenes';

export default {
  name: 'Ordenes',
  data() {
    return {
      items: [
          {
            text: 'Home',
            to: { name: 'Dashboard' }
          },
          {
            text: 'Monitor de Ordenes',
            active: true
          }
        ]
    }
  },
  created() {
    this.$store.dispatch("paginaActiva",true);
  },
  components: {
    monitor
  }
}
</script>
<style lang="scss">
  .breadcrumb__separador {
    background-color: white;
    .active::before{
      content: ">>";
    }
  }
</style>
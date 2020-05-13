<template>
  <div class="bg-light">
    <h2>Componente Shows</h2>
    <h3>Shows TV Maze</h3>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 d-flex align-items-stretch" v-for="(item, index) in series" :key="index">
        <div class="card my-2 h-80 my-3">
          <img :src="item.image.original" class="img-fluid" :alt="index">
          <div class="card-body">
            <h5 class="card-title text-center">{{item.name}}</h5>
            <p class="card-text text-justify" v-html="$options.filters.recorte(item.summary)"></p>
            <a :href="item.url" target="_blank" class="btn btn-primary">Visitar</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Shows',
  props: {
    series: {
      type: Array,
      required: true
    }
  },
  filters: {
    recorte(valor){
      return valor.substr(0,100)+"...";
    }
  }
}
</script>

<style scoped>

</style>
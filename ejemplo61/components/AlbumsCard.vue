<template>
  <div class="column mt-5 px-2 is-one-quarter">
      <div class="box">
        <h3>{{album.id}}-{{album.title}}</h3>
        <a href="#" class="button is-primary">Ver más</a>
      </div>
  </div>
</template>

<script>
export default {
    name: 'AlbumsCard',
    props: {
        album: { 
            type: Object,
            required: true 
        }
    }
}
</script>

<style lang="css">
    h3 {
        min-height: 5em;
    }
</style>
<template>
  <div class="column mt-5 px-2 is-one-quarter">
      <div class="box">
        <h3>{{album.id}}-{{album.title}}</h3>
        <nuxt-link :to="`/albums/${album.id}`" class="button is-primary">
            <font-awesome-icon :icon="['fas', 'plus']"/><span> Ver más</span>
        </nuxt-link>
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
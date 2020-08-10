<template>
  <div>
      <ul>
          <li>{{album.id}}-{{album.title}}</li>
      </ul>
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

<style>

</style>
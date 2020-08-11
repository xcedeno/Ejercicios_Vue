<template>
  <div class="container">
    <header class="mt-5">
        <span class="icon has-text-info is-large">
            <span class="fa-stack fa-lg">
                <nuxt-link to="/">
                    <font-awesome-icon :icon="['fas', 'long-arrow-alt-left']"/>Regresar
                </nuxt-link>
            </span>
        </span>
    </header>
    <h1 class="title mt-1 has-text-centered">Título: {{album.title}}. Número: {{album.id}}</h1>
    <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="(item,index) in fotos" :key="index">
            <img :src="item.url" :alt="item.title">
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import env from '../../config/env';

export default {
    name: 'Albums',
    data() {
        return {
            album: {},
            fotos: []
        }
    },
    created: async function() {
        let albumId = this.$route.params.id;
        
        let dataAlbum = await axios.get(`${env.apiUrl}/albums/${albumId}`);
        this.album = dataAlbum.data;

        let dataPhotos = await axios.get(`${env.apiUrl}/albums/${albumId}/photos`);
        this.fotos = dataPhotos.data;

    },
}
</script>

<style>

</style>
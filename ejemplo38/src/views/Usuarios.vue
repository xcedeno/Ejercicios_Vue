<template>
  <div>
    <p>Lista de Usuarios</p>
    <ul class="list-group">
      <router-link :to="{name: 'InfoUsuario', params: {id: item.id}}" tag="li" class="list-group-item" v-for="(item, index) in usuarios" :key="index">{{item.first_name}} {{item.last_name}}</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Usuarios',
  data() {
    return {
      usuarios: [],
      id: this.$route.params.id
    }
  },
  methods: {
    async traerUsuarios(){
      try {
        const respuesta = await axios.get('https://reqres.in/api/users');
          this.usuarios = respuesta.data.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  created() {
    this.traerUsuarios();
  },
}
</script>

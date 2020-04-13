<template>
  <div class="container">
      <p>Usuarios</p>
      <p>La ruta de navegacion es: {{$route.name}}</p>
      <router-link :to="{name:'Usuarios',params:{id:item}}" v-for="(item, index) in arregloUsuario" :key="index">
          <button>{{item}}</button>
      </router-link>
      <UsuarioIndiv/>
  </div>
</template>

<script>
import UsuarioIndiv from '../components/UsuarioIndiv.vue';

export default {
    name: 'Usuarios',
    components: {
        UsuarioIndiv
    },
    data() {
        return {
            arregloUsuario:['Juan','Elio','Yecenia','Petra','Josefina']
        }
    },
}
</script>

<style>

</style>
<template>
  <div>
      <h3>Información del Usuario {{id}}</h3>
      <div>
          <img :src="avatar" alt="avatar" class="img-fluid">
          <p><strong>Nombre y Apellido:</strong> {{nombre}} {{apellido}}</p>
          <p><strong>Correo Electrónico:</strong> {{correo}}</p>
      </div>
      <button type="button" class="btn btn-primary" @click="volver">Volver</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'InfoUsuario',
    data() {
        return {
            id: this.$route.params.id,
            nombre: '',
            apellido: '',
            correo: '',
            avatar: ''
        }
    },
    // watch: {
    //     $route(){
    //         this.id = this.$route.params.id;
    //         this.traerUsuario();
    //     }
    // },
    methods: {
        volver(){
            this.$router.push({name: 'Usuarios'});
        },
        async traerUsuario(){
            try {
                const respuesta = await axios.get(`https://reqres.in/api/users/${this.id}`);
                this.nombre = respuesta.data.data.first_name;
                this.apellido = respuesta.data.data.last_name;
                this.correo = respuesta.data.data.email;
                this.avatar = respuesta.data.data.avatar;
            } catch (error) {
                console.error(error);
            }
        }
    },
    created() {
        this.traerUsuario();
    },
}
</script>

<style>

</style>
<template>
  <div>
    <div class="card">
      <div class="card-header image figure">
        <img :src="personaje.image" :alt="personaje.id+'-'+personaje.name">
      </div>
      <div class="card-content">
        <h3 class="title is-size-6">{{personaje.name}}</h3>
      <button class="button is-success is-rounded is-small" @click="verMas(personaje.id)">Ver Más</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Personajes',
  props: ['personaje'],
  methods: {
    verMas(id){
      this.$emit('mostrarModal',id);
    }
  },
}
</script>

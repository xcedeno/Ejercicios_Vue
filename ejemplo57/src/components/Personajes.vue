<template>
  <div>
    <div class="card">
      <div class="card-header image figure">
        <img :src="personaje.image" :alt="personaje.id">
      </div>
      <div class="card-content">
        <h3 class="title is-size-6">{{personaje.name}}</h3>
      <button class="button is-success is-rounded is-small">Ver Más</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Personajes',
  props: ['personaje'],
}
</script>

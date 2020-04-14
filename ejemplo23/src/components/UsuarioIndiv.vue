<template>
  <div class="container">
      <p>Usuario: {{$route.params.id}}</p>
      <label for="example-datepicker">Choose a date</label>
      <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
      <p>Value: '{{ value }}'</p>
      <div class="h2 mb-0">
        <b-icon-arrow-up></b-icon-arrow-up>
        <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
      </div>
       <b-overlay :show="show" rounded="sm">
      <b-card title="Card with overlay" :aria-hidden="show ? 'true' : null">
        <b-card-text>Laborum consequat non elit enim exercitation cillum.</b-card-text>
        <b-card-text>Click the button to toggle the overlay:</b-card-text>
        <b-button :disabled="show" variant="primary" @click="show = true">
          Show overlay
        </b-button>
      </b-card>
      </b-overlay>
      <b-button class="mt-3" @click="show = !show">Toggle overlay</b-button>
      <div class="p-4">
      <b-icon icon="clock" animation="spin" font-scale="4" shift-v="8"></b-icon>
    </div>
  </div>
</template>

<script>
export default {
    name: 'UsuarioIndiv',
    data() {
      return {
        value: '',
        show: true
      }
    },
}
</script>

<style>

</style>
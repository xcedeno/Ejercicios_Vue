<template>
  <div class="container">
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
    name: 'SignUp',
    data() {
      return {
        show: false
      }
    },
}
</script>

<style>

</style>
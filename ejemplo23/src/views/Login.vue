<template>
  <div class="container">
    <p>Login</p>
    <label for="example-datepicker">Choose a date</label>
    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
    <p>Value: '{{ value }}'</p>
    <div class="h2 mb-0">
        <b-icon-arrow-up></b-icon-arrow-up>
        <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            value: ''
        }
    },
}
</script>

<style>

</style>
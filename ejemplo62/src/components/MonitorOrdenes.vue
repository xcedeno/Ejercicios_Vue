<template>
  <div>
    <div class="border__form p-4 mx-3">
      <form>
        <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name">
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MonitorOrdenes',
  data() {
    return {
      selected: null,
    }
  },
}
</script>

<style scoped lang="scss">
  .border__form{
    border: 1px solid black;
  }
  .form__select__bordes{
    border-radius: 10px;
    width: 300px;
  }
</style>

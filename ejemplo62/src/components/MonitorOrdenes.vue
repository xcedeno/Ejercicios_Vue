<template>
  <div>
    <div class="border__form p-4 mx-3">
      <form>
        <div class="form-row">
          <div class="col">
            <div class="form-group">
              <label for="exampleFormControlSelect1">Oficina</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="exampleFormControlSelect1">Estado</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="example-datepicker">Fecha de Entrega</label>
              <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="example-datepicker">a</label>
              <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
            </div>
          </div>
           <div class="col">
            <div class="form-group mt-4">
              <b-button variant="primary" class="mt-4" block>Buscar</b-button>
            </div>
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

<template>
  <div>
    <form>
      <div class="input-field col s12">
        <select class="browser-default" v-model="valores" :name="tipo">
          <option :value="cambio.monedaNombre" class="blue-text text-darken-2" v-for="(cambio, index) in lista" :key="index">
            {{cambio.monedaNombre}}
          </option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ListaCambios',
  data() {
    return {
      valores: ''
    }
  },
  watch: {
    valores(){
      this.cambioRates()
    }
  },
  methods: {
    cambioRates(){
      this.$emit('rataCambio',this.tipo,this.valores)
    }
  },
  props: ['lista','tipo']
}
</script>

<style scoped lang="scss">

</style>
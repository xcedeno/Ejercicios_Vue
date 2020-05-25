<template>
  <div>
    <h2>Cambios</h2>
  </div>
</template>

<script>
import { monedaOpenEx } from "../conexiones/api_fixer";

export default {
  name: 'Cambios',
  created() {
    monedaOpenEx('USD');
  },
}
</script>

<style scoped lang="scss">

</style>

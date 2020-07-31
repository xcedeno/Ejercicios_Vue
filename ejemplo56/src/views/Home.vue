<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Componente />
  </div>
</template>

<script>
// @ is an alias to /src
import Componente from '@/components/Componente.vue'

export default {
  name: 'Home',
  data() {
    return {
      texto: "Texto desde el componente padre..."
    }
  },
  components: {
    Componente
  }
}
</script>

<template>
  <div class="home">
    <p>inicio</p>
    <Componente1></Componente1>
  </div>
</template>

<script>
import Componente1 from '@/components/Componente1.vue'

export default {
  name: 'Home',
  components: {
    Componente1
  }
}
</script>

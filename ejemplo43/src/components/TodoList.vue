<template>
  <div>
    <ul>
      <li v-for="(item, index) in todos" :key="index">{{item.texto}}</li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: 'TodoList',
  props: ['todos'],
  created() {
      eventBus.$on('agreTarea',elem=>{
          this.todos.push(elem);
      });
  },
}
</script>

<style scoped lang="scss">

</style>

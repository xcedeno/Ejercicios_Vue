<template>
  <div>
    <transition name="fade" enter-active-class="animated tada" leave-active-class="animated bounceOutDown">
        <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {
    name: 'Animaciones'
}
</script>
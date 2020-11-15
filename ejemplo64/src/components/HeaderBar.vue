<template>
  <header>
    <nav
      class="navbar has-background-dark is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <HeaderBarBrand></HeaderBarBrand>
      <HeaderBarLinks></HeaderBarLinks>
    </nav>
  </header>
</template>

<script>
import HeaderBarBrand from '@/components/HeaderBarBrand.vue';
import HeaderBarLinks from '@/components/HeaderBarLinks.vue';

export default {
  name: 'HeaderBar',
  components: { HeaderBarBrand, HeaderBarLinks },
};
</script>

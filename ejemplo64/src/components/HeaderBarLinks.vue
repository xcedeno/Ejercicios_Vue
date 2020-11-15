<template>
  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a :href="github" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon class="display-2" :icon="['fab', 'github']" />
          </a>
          <a :href="twitter" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon class="display-2" :icon="['fab', 'twitter']" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      github: 'https://github.com/JuanDuran85',
      twitter: 'https://twitter.com/JuanDuran85',
    };
  },
};
</script>

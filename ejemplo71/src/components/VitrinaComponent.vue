<template>
  <div>
    <section class="section-principal">
      <div class="section-principal__bloque">
        <p class="section-principal__text">Vitrina</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "VitrinaComponent",
};
</script>

<style scoped lang="scss">
.section-principal {
  margin: 5px;
  background-color: #dcdcd6eb;
  padding: 5px;
  text-align: center;
  height: 40vh;

  &__bloque {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__text {
    color: rgba(114, 111, 111, 0.439);
  }
}
</style>

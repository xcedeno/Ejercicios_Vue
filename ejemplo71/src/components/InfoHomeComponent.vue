<template>
  <div>
    <section class="principal-secction">
      <div class="text-center prinncipal-secction__text">
        <h3>{{ dataInfoGeneral[0] }}</h3>
      </div>
      <section class="principal-secction__bloques">
        <div
          class="principal-secction__infos"
          v-for="dataIn in dataInfoGeneral[1]"
          :key="dataIn.titulo"
        >
          <b-card
            :title="dataIn.titulo"
            :img-src="dataInfoGeneral[2]"
            img-alt="Image"
            img-top
            tag="article"
            class="m-2"
          >
            <b-card-text>
              <p>{{ dataIn.texto }}</p>
            </b-card-text>
          </b-card>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "InfoHomeComponent.vue",
  props: {
    dataInfoGeneral: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.principal-secction {
  text-align: center;

  &__bloques {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  &__infos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 30%;
    margin: 10px;
    text-align: center;
  }

  .card {
    min-height: 150px;
    border: none !important;
  }

  .card > img {
    width: 100px;
    margin: 0 auto;
  }
  &__text {
    text-align: center;
  }
}
</style>

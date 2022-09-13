<template>
  <section class="carro">
    <p class="carro__title">Bolsa de Compras BIG MOBILE</p>
    <hr class="carro__line" />
    <section v-for="(item, index) in getCardProducts" :key="index">
      <div class="carro__productos">
        <div>
          <img src="https://placeholder.pics/svg/50x50" alt="imagen" />
        </div>
        <div>
          <p>{{item.nombre}}</p>
          <p>{{item.precio_promo}}</p>
        </div>
      </div>
    </section>
    <hr class="carro__line" />
    <section>
      <div class="carro__final">
        <p>SubTotal Productos</p>
        <p>${{getSubTotalCard}}</p>
      </div>
      <div class="carro__final">
        <p>Descuentos</p>
        <p>$22822</p>
      </div>
      <div class="carro__final">
        <p>TOTAL</p>
        <p class="fs-4 text-primary">${{getTotalCard}}</p>
      </div>
    </section>
    <div class="text-center">
      <b-button class="w-75" variant="primary">Pagar</b-button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "CardComponent",
  computed: {
    ...mapGetters(["getCardProducts","getSubTotalCard","getTotalCard"]),
  },
};
</script>

<style lang="scss" scoped>
.carro {
  margin-top: 90px;

  &__line {
    border: 2px solid black;
    opacity: 1;
  }

  &__title {
    font-weight: bold;
    margin-bottom: -5px;
  }

  &__productos {
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 5px;
    justify-content: space-evenly;

    div:last-child {
      p:last-child {
        line-height: 0.8;
        margin-top: -5px;
      }
    }
  }

  &__final {
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 5px;
    justify-content: space-between;
    font-weight: bold;
  }
}
</style>

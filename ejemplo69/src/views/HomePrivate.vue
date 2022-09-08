<template>
  <div>
    <b-row>
      <b-col cols="12">
        <section class="jumbotron-hp mb-4">
          <img
            src="https://placeholder.pics/svg/600x300"
            alt="image"
            class="jumbotron-hp__image"
          />
          <h3 class="jumbotron-hp__title">Bienvenido Juan</h3>
          <p class="jumbotron-hp__subtitle">
            Tienes un monto de 1.000.000 preaprobado. Solicitalo ya!
          </p>
        </section>
      </b-col>
      <b-col cols="6">
        <b-row>
          <b-col cols="12">
            <section class="linea-card">
              <b-row>
                <b-col cols="4">
                  <div class="linea-credito text-center">
                    <p class="linea-credito__graph">97%</p>
                    <b-button variant="link" class="linea-credito__button"
                      >Ver Detalles</b-button
                    >
                  </div>
                </b-col>
                <b-col cols="8">
                  <h4>Cupo Lineas Crédito</h4>
                  <div class="d-flex text-center">
                    <div class="mx-3">
                      <p class="display-6">1450</p>
                      <p>Utilizado</p>
                    </div>
                    <div>
                      <p class="display-6">1500</p>
                      <p>Total</p>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </section>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="6"> p2 </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "HomePrivete",
  components: {},
};
</script>

<style lang="scss" scoped>
.jumbotron-hp {
  border: 1px solid rgba(122, 120, 120, 0.339);
  border-radius: 5px;
  padding: 5px;

  &__image {
    width: 100%;
    height: 40vh;
  }

  &__title {
    margin-top: 15px;
  }
}

.linea-card{
  border: 1px solid rgba(122, 120, 120, 0.339);
  border-radius: 5px;
  padding: 5px;
}

.linea-credito {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>

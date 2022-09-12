<template>
  <b-container fluid>
    <b-row>
      <b-col cols="3">
        <section class="carro">
          <p class="carro__title">Bolsa de Compras BIG MOBILE</p>
          <hr class="carro__line" />
          <section>
            <div class="carro__productos">
              <div>
                <img src="https://placeholder.pics/svg/50x50" alt="imagen" />
              </div>
              <div>
                <p>nombre producto</p>
                <p>Precio</p>
              </div>
            </div>
            <div class="carro__productos">
              <div>
                <img src="https://placeholder.pics/svg/50x50" alt="imagen" />
              </div>
              <div>
                <p>nombre producto</p>
                <p>Precio</p>
              </div>
            </div>
          </section>
          <hr class="carro__line" />
          <section>
            <div class="carro__final">
              <p>SubTotal Productos</p>
              <p>$198204</p>
            </div>
            <div class="carro__final">
              <p>Descuentos</p>
              <p>$22822</p>
            </div>
            <div class="carro__final">
              <p>TOTAL</p>
              <p class="fs-4 text-primary">$135564</p>
            </div>
          </section>
          <div class="text-center">
            <b-button class="w-75" variant="primary">Pagar</b-button>
          </div>
        </section>
      </b-col>
      <b-col cols="9">
        <b-row>
          <div class="info__title">
            <h3>Equipos & Accesorios</h3>
          </div>
          <b-card-group class="info-cards">
            <b-card
              :title="producto.nombre"
              :img-src="
                producto.imagen.length > 20
                  ? producto.imagen
                  : 'https://placeholder.pics/svg/100x100'
              "
              img-alt="Image"
              img-top
              v-for="producto in getProductosFinal"
              :key="producto.id"
            >
              <b-card-text class="info-cards__text">
                <ul>
                  <li v-for="info in producto.caracteristicas" :key="info">
                    {{ info }}
                  </li>
                </ul>
              </b-card-text>
              <b-card-body class="info-cards__body">
                <div>
                  <p>Antes</p>
                  <p>{{ producto.precio_normal }}</p>
                </div>
                <div>
                  <p>Ahora</p>
                  <p>{{ producto.precio_promo }}</p>
                </div>
              </b-card-body>
              <div class="text-center">
                <b-button href="#" variant="primary">Agregar</b-button>
              </div>
            </b-card>
          </b-card-group>
        </b-row>
        <b-row>
          <nav class="pagination-menu">
            <ul class="pagination pagination-sm">
              <li class="page-item active" aria-current="page">
                <span class="page-link">1</span>
              </li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
            </ul>
          </nav>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "EquiposView",
  data() {
    return {
      valores: [],
      rows: 100,
      currentPage: 1,
    };
  },
  computed: {
    getProductosFinal() {
      return this.$store.getters.getProductos;
    },
  },
};
</script>

<style lang="scss">
.info__title {
  margin-top: 30px;
}

.info-cards {
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin-top: 5px;
  justify-content: space-evenly;

  .card {
    margin-top: 5px;
    img {
      height: 150px;
    }
  }

  &__text {
    ul {
      text-decoration: none;
      list-style-type: "- ";
      font-size: 12px;
    }
  }

  &__body {
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    text-align: center;

    div > p:last-child {
      margin-top: -15px;
    }

    div:last-child > p:last-child {
      color: blue;
      font-weight: bold;
    }
  }
}
.pagination-menu {
  margin-top: 20px;
  margin-left: 10px;
}
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

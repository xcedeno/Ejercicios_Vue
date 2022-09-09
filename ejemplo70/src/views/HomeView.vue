<template>
  <div>
    <NavBar />
    <b-container fluid class="mt-2">
      <b-row>
        <b-col cols="4" class="mt-5">
          <MenuLateral />
        </b-col>
        <b-col cols="8">
          <b-tabs content-class="mt-3">
            <b-tab title="Nueva Transferencias" active>
              <b-breadcrumb :items="items"></b-breadcrumb>
            </b-tab>
            <b-tab title="Cartola Transferencias">
              <b-breadcrumb :items="items"></b-breadcrumb>
            </b-tab>
          </b-tabs>
          <section>
            <h3>Nueva Transferencia</h3>
            <div>
              <b-form-group
                label="Cuenta de Origen"
                v-slot="{ ariaDescribedby }"
              >
                <b-form-checkbox-group
                  id="checkbox-group-1"
                  v-model="selected"
                  :options="options"
                  :aria-describedby="ariaDescribedby"
                  name="flavour-1"
                  class="d-flex"
                ></b-form-checkbox-group>
              </b-form-group>
            </div>
          </section>
          <section>
            <b-form-group
              id="fieldset-1"
              description="Let us know your name."
              label="Enter your name"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="my-1">
                <b-col sm="3">
                  <label>Banco</label>
                </b-col>
                <b-col sm="9">
                  <b-form-select v-model="selectedApi" size="sm" class="mt-3">
                    <b-form-select-option :value="null"
                      >Seleccione</b-form-select-option
                    >
                    <b-form-select-option v-for="banco in getBancos" :key="banco.id" :value="banco.id"
                      >{{banco.nombre}}</b-form-select-option
                    >
                  </b-form-select>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="3">
                  <label>N°Cuenta</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input
                    id="input-1"
                    v-model="name"
                    :state="state"
                    trim
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="3">
                  <label>RUT</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input
                    id="input-1"
                    v-model="name"
                    :state="state"
                    trim
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="3">
                  <label>Nombre</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input
                    id="input-1"
                    v-model="name"
                    :state="state"
                    trim
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="3">
                  <label>Monto</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input
                    id="input-1"
                    v-model="name"
                    :state="state"
                    trim
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="3">
                  <label>Email</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input
                    id="input-1"
                    v-model="name"
                    :state="state"
                    trim
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="3">
                  <label>Mensaje</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input
                    id="input-1"
                    v-model="name"
                    :state="state"
                    trim
                  ></b-form-input>
                </b-col>
              </b-row>
            </b-form-group>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import MenuLateral from "../components/MenuLateral.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      selectedApi: null,
      name: "",
      items: [
        {
          text: "Home",
          href: ">>",
        },
        {
          text: "Transferencias",
          href: ">>",
        },
        {
          text: "Nuevas",
          active: true,
        },
      ],
      selected: [], // Must be an array reference!
      options: [
        { text: "Cuenta Corriente", value: "cc" },
        { text: "Linea de Credito", value: "lc" },
        { text: "Tarjeta de Credito", value: "tc" },
      ],
    };
  },
  components: {
    NavBar,
    MenuLateral,
  },
  computed: {
    state() {
      return this.name.length >= 4;
    },
    invalidFeedback() {
      if (this.name.length > 0) {
        return "Enter at least 4 characters.";
      }
      return "Please enter something.";
    },
    ...mapGetters(["getBancos"]),
  },
  beforeCreate() {
    this.$store.dispatch("postUserToken");
  },
  created() {
    this.$store.dispatch("getBancos");
  },
};
</script>

<template>
  <div id="app">
    <b-navbar type="dark" variant="dark" toggleable="md">
      <b-navbar-nav>
        <b-nav-item href="#">Banco Digital de Chile</b-nav-item>
      </b-navbar-nav>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto">
          <b-nav-item href="#">Profile</b-nav-item>
          <b-nav-item href="#">Log Out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-breadcrumb class="ms-5 mt-4" :items="items"></b-breadcrumb>

    <b-container fluid>
      <b-row>
        <b-col cols="3">
          <b-list-group>
            <b-list-group-item button>Cuenta Corriente</b-list-group-item>
            <b-list-group-item button>Tarjeta de Crédito</b-list-group-item>
            <b-list-group-item button>Línea de Crédito</b-list-group-item>
            <b-list-group-item button>Transferencias</b-list-group-item>
            <b-list-group-item button>Pago de Servicios</b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col cols="9">
          <router-view/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

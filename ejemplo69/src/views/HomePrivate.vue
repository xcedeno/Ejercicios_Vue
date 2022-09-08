<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: "HomePrivete",
  components: {},
};
</script>

<style></style>

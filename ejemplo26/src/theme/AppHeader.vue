<template>
  <div>
      <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/category/front-end" class="navbar-item" exact>
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </router-link>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <router-link :to="{name: 'Category', params:{id: 'front-end'}}" class="navbar-item">
                    Front-End
                </router-link>
                <router-link :to="{name: 'Category', params:{id: 'mobile'}}" class="navbar-item">
                    Mobile
                </router-link>
                <router-link to="/login" class="navbar-item" exact v-if="!getValueAutorizado">
                    Login
                </router-link>
                <router-link to="/login" class="navbar-item" exact v-else>
                    Logout
                </router-link>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        More
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            About
                        </a>
                        <a class="navbar-item">
                            Jobs
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Report an issue
                        </a>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <div v-if="!getValueAutorizado">
                            <router-link to="/login" class="button is-light" exact>
                                Log in
                            </router-link>
                        </div>
                        <div v-else>
                            <router-link to="/login" class="button is-light" exact>
                                Log out
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'AppHeader',
    computed: {
        ...mapGetters(['getValueAutorizado'])
    },
}
</script>
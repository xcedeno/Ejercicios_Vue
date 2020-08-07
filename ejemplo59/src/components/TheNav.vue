<template>
  <header>
    <nav class="navbar">
        <a href="" class="nav-log navbar-brand">
            <img :src="imagen" alt="got-logo" class="got-logo" />
        </a>
        <ul class="nav justify-content-end">
            <li v-for="(nav,index) in navUl" :key="index" class="nav-item" :id="nav.htmlId">
                <a :href="nav.aHref" class="nav-link">Characters</a>
            </li>
        </ul>
    </nav>
  </header>
</template>

<script>
import GotLogo from '../assets/img/got-logo.png';

export default {
    name: 'TheNav',
    data() {
        return {
            imagen: GotLogo,
            navUl: [
                {
                    id: 1,
                    htmlId: 'nav-1',
                    aHref: './' 
                }
            ]
        }
    },
}
</script>

<style>

</style>
<template>
  <div class="container">
    <b-jumbotron header="Directivas" lead="Directivas locales y globales personalizadas">
      <p v-colorTexto.cursiva>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perferendis veniam natus et <span v-tipoTexto:mayor.negrita = "'Times New Roman'">explicabo praesentium modi quas</span>, <span v-transforTexto="{colores: 'green'}">voluptas doloribus, maxime commodi</span> atque debitis dicta <span v-tipoTexto:menor.capitalize = "'helvetica'">voluptates necessitatibus adipisci maiores, distinctio odit?</span></p>
      <p><span v-cambioLocal.negrita>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste exercitationem corrupti laudantium, <span v-cambioLocal.uppercase>non alias nisi error, eos similique</span> officia, enim doloremque quaerat dolorem optio! Tempore assumenda reprehenderit numquam vero vel!</span></p>
      <b-button variant="primary" href="#">Clic</b-button>
    </b-jumbotron>
  </div>
</template>

<script>

export default {
  name: 'App',
  directives: {
    'cambioLocal' : {
      bind(el,binding){
        if (binding.modifiers['negrita']) {
          el.style.fontWeight = 'bold';
        } else if (binding.modifiers['uppercase']) {
          el.style.textTransform = 'uppercase';
        }
      }
    }
  }
}
</script>

<style>
</style>
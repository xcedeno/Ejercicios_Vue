<template>
  <div>
    <header class="masthead" style="background-image: url('/assets/img/home-bg.jpg');">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="post-heading">
              <h1 v-html="usuario"></h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </li>
              <li class="list-inline-item">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </li>
              <li class="list-inline-item">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </li>
            </ul>
            <p class="text-muted copyright">Copyright&nbsp;©&nbsp;V8 - 2018</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
    name: 'Adminsitrador',
    props: ['id'],
    computed: {
        usuario(){
            if (this.id == 'simple') {
                return "<h1><strong>Bienvenido a la página de Administración</strong></h1>"
            } else if (this.id == 'avanzado'){
                return "<h1>Esta página de administración está en construcción. Intente como administrador simple</h1>"
            } else {
                return "<h1>La página no existe - no tiene permiso</h1>"
            }
        }
    },
};
</script>

<style>
</style>
<template>
  <div class="container">
    <div class="jumbotron">
      <formulario>
        <div slot="titulo">
          <h3>Cambiar Clave</h3>
        </div>
        <div slot="elementos">
          <div class="form-group">
            <label for="exampleInputEmail1">Dirección de Correo Electrónico</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese el correo electrónico">
          </div>
        </div>
        <div slot="boton">
          <button class="btn btn-primary">Cambiar Clave</button>
        </div>
      </formulario>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CambiarClave',
}
</script>

<style>

</style>

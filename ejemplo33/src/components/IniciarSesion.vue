<template>
  <div class="container">
    <div class="jumbotron">
      <formulario>
        <div slot="titulo">
          <h3>Iniciar Sesión</h3>
        </div>
        <div slot="elementos">
          <div class="form-group">
            <label for="exampleInputEmail1">Dirección de Correo Electrónico</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese el correo electrónico">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Clave</label>
            <input placeholder="Ingrese la contraseña" type="password" class="form-control" id="exampleInputPassword1">
          </div>
        </div>
        <div slot="boton">
          <button class="btn btn-primary">Iniciar Sesión</button>
        </div>
      </formulario>
    </div>
  </div>
</template>

<script>

export default {
  name: 'IniciarSesion',
}
</script>

<style>

</style>

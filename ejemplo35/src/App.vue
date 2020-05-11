<template>
  <div class="container">
    <div class="row">
      <section class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div>
          <h1>Formulario</h1>
        </div>
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Nombre</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre" v-model.trim="usuario.nombre">
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput2">Correo Electrónico</label>
            <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com" v-model.lazy="usuario.correo">
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput3">Contraseña</label>
            <input type="password" class="form-control" id="exampleFormControlInput3" placeholder="Contraseña" v-model="usuario.clave">
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput3">Edad</label>
            <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Edad" v-model.number="usuario.edad">
          </div>
          <div class="form-group">
            <label for="pais">País</label>
            <select class="form-control" v-model="usuario.pais">
              <option v-for="(item, index) in paises" :key="index" :value="item">{{item}}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Mensaje</label>
            <textarea class="form-control" v-model="usuario.mensaje" rows="3"></textarea>
          </div>
          <fieldset class="form-group">
            <legend>Genero</legend>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="hombre" checked v-model="usuario.genero">
              <label class="form-check-label" for="exampleRadios1">
                Hombre
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="mujer" v-model="usuario.genero">
              <label class="form-check-label" for="exampleRadios2">
                Mujer
              </label>
            </div>
          </fieldset>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" name="condiciones" id="exampleCheckBox" v-model="usuario.condiciones" value="acepto">
                Acepto las condiciones
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" name="noticias" id="exampleCheckBox2" v-model="usuario.condiciones" value="noticias">
                Recibir Noticas
            </label>
          </div>
          <button type="submit" class="btn btn-primary" @click.prevent="enviarFormulario">Enviar</button>
    </form>
      </section>
      <section class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" v-if="mostrar">
        <div>
          <h1>Resultados</h1>
          <p><strong>Nombre: </strong>{{usuario.nombre}}</p>
          <p><strong>Correo Electrónico: </strong>{{usuario.correo}}</p>
          <p><strong>Contraseña: </strong>{{usuario.clave}}</p>
          <p><strong>Edad: </strong>{{usuario.edad}}</p>
          <p><strong>País: </strong> {{usuario.pais}}</p>
          <p class="mensaje"><strong>Mensaje: </strong>{{usuario.mensaje}}</p>
          <p><strong>Genero: </strong>{{usuario.genero}}</p>
          <p><strong>Condiciones: </strong>{{usuario.condiciones}}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      usuario: {
        nombre: '',
        correo: '',
        edad: '',
        clave: '',
        pais: 'Seleccione un País',
        mensaje: '',
        genero: '',
        condiciones: [],
      },
      paises: ["Seleccione un País","Venezuela","Colombia","Ecuador","Peru","Bolivia","Chile","Argentina","Paraguay","Brasil"],
      mostrar: false
    }
  },
  methods: {
    enviarFormulario(){
      this.mostrar = true
    }
  },
}
</script>

<style>
.mensaje {
  white-space: pre;
}
</style>

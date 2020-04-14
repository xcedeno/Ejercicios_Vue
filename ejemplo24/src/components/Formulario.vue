<template>
  <b-container>
    <div class="row">
      <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show" class="col-12">
        <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
          <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name" class="col-12"></b-form-input>
        </b-form-group>
        <b-form-textarea id="textarea" v-model="form.text" placeholder="Enter something..." rows="3" max-rows="6"></b-form-textarea>
        <b-form-checkbox id="checkbox-1" v-model="form.status" name="checkbox-1" value="accepted" unchecked-value="not_accepted">I accept the terms and use</b-form-checkbox>
        <div>State: <strong>{{ form.status }}</strong></div>
        <b-form-group label="Using options array:">
          <b-form-checkbox-group id="checkbox-group-1" v-model="selected" :options="options" name="flavour-1"></b-form-checkbox-group>
        </b-form-group>
        <b-form-group label="Individual radios">
          <b-form-radio v-model="radioB" name="some-radios" value="A">Option A</b-form-radio>
          <b-form-radio v-model="radioB" name="some-radios" value="B">Option B</b-form-radio>
        </b-form-group>
        <b-form-group>
          <b-form-select v-model="listaSelec" :options="options2"></b-form-select>
        </b-form-group>
        <b-form-group></b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
    <div class="row py-3" v-show="envio">
      <b-alert show class="col-12">Datos ingresados</b-alert>
      <p class="col-12">Nombre: {{form.name}}</p>
      <p class="col-12">Correo Electrónico: {{form.email}}</p>
      <p class="col-12">Mensaje: <pre>{{ form.text }}</pre></p>
      <p class="col-12">Seleccionado: 
        <ul>
          <li v-for="(item, index) in selected" :key="index">{{ item }}</li>
        </ul>
      </p>
      <p class="col-12">Selected: <strong>{{ radioB }}</strong></p>
      <p class="col-12">Selected: <strong>{{ listaSelec }}</strong></p>
    </div>
  </b-container>
</template>

<script>
  export default {
    name: 'Formulario',
    data() {
      return {
        form: {
          email: '',
          name: '',
          text: '',
          status: 'not_accepted'
        },
        show: true,
        selected: [],
        options: [
          { text: 'Enviar Email', value: 'Enviar Email' },
          { text: 'Enviar una Copia', value: 'Enviar una Copia' },
        ],
        radioB: '',
        listaSelec: 'null',
        options2: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ],
        envio: false
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
        this.envio = true;
      },
      onReset(evt) {
        evt.preventDefault();
        this.form.email = '';
        this.form.name = '';
        this.form.text= '';
        this.form.status= 'not_accepted';
        this.selected= [];
        this.show = false;
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
# Vue

```bash
    -p, --preset <presetName>       omitir indicaciones
    -d, --default                   usar el default en la creación
    -m, --packageManager <command>  Usar npm o yarn
    -n, --no-git                    Sin utilizar git
    -b, --bare                      Sin isntrucciones para principiantes
```

```bash
vue create ejemplo1 -dnm yarn
```

```bash
vue init simple nombre_proyecto
vue init webpack-simple nombre_proyecto
npm install -g npm-check-updates
ncu
ncu -u
```

```js
"production":"vue-cli-service build --modern"
```

```bash
npx http-server ./dist/
```

## Libreria para monedas: Accounting.js

* [Repositorio](http://openexchangerates.github.io/accounting.js/).

* [CDN](https://raw.githubusercontent.com/openexchangerates/accounting.js/master/accounting.js).

```bash
npm i accounting
o
yarn add accounting
```
* Uso:
  ```javascript
    import accounting from 'accounting';
    accounting.formatMoney(valor)
  ```

## Libreria para Fechas: [moment.js](https://momentjs.com/)

* [Repositorio](https://github.com/moment/moment/).
* [CDN](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.14.1/moment-with-locales.js).
* [Web](https://momentjs.com/).

```bash
npm i moment
o
yarn add moment
```

## Libreria de CSS Bootstrap

* [Repositorio](https://github.com/moment/moment/).
* [CDN-CSS](https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css).
* [CDN-jQuery](https://code.jquery.com/jquery-3.4.1.slim.min.js).
* [CDN-popper](https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js).
* [CDN-bootstrap](https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js).
* [Web](https://getbootstrap.com/).

```bash
npm i bootstrap jquery popper.js
o
yarn add bootstrap jquery popper.js
```
* utilizacion en el main.js o index.js
  ```js
    import 'bootstrap'; 
    import 'bootstrap/dist/css/bootstrap.min.css';
  ```

## Uso de Babel - plugin-syntax-dynamic-import

Esta dependencia permitirá trabajar e implementar desde VueJS las Lazy Loading Routes en conjunto con Vue-Router.

[Documentación Oficial para Vue-Router](https://router.vuejs.org/guide/advanced/lazy-loading.html#grouping-components-in-the-same-chunk)
[Documentación oficial para babel:](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/).

Instalacion de la dependencia: 

```bash
npm install --save-dev @babel/plugin-syntax-dynamic-import
o
yarn add --dev @babel/plugin-syntax-dynamic-import
```

## Instalando Vue-Router

* Sitio oficial:
    [Vue-Router](https://router.vuejs.org/)

* Usando el CDN o descarga del archivo:
    [CDN/descarga](https://unpkg.com/vue-router/dist/vue-router.js)

    ```javascript
      <script src="https://unpkg.com/vue-router@3.1.6/dist/vue-router.js"></script>
    ```

* Instalacion con NPM:
```bash
npm i --save vue-router
```

* Instalacion con Yarn:
```bash
yarn add vue-router
```

## Instalando Vuex

* Sitio oficial:
    [Vuex](https://vuex.vuejs.org/),

* Usando el CDN o descarga del archivo:
    [CDN/descarga](https://unpkg.com/vuex)

    ```javascript
      <script src="https://unpkg.com/vuex@3.1.3/dist/vuex.js"></script>
    ```

* Instalacion con NPM:
```bash
npm -i vuex --save
```

* Instalacion con Yarn:
```bash
yarn add vuex
```

* Utilizar mapState, mapGetters

```javascript
import {mapState, mapGetters} from 'vuex'
```

## Instalando Bootstrap-Vue

Para trabajar con bootstrap-vue es necesario primero instalar bootstrap.

* Sitio oficial:
    [Bootstrap-Vue](https://bootstrap-vue.js.org/),

* Usando el CDN o descarga del archivo:

    ```html
      <head>
        <!-- Load required Bootstrap and BootstrapVue CSS -->
        <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap/dist/css/bootstrap.min.css" />
        <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css" />
        <!-- Load polyfills to support older browsers -->
        <script src="//polyfill.io/v3/polyfill.min.js?features=es2015%2CIntersectionObserver" crossorigin="anonymous"></script>
        <!-- Load Vue followed by BootstrapVue, and BootstrapVueIcons -->
        <script src="//unpkg.com/vue@latest/dist/vue.min.js"></script>
        <script src="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js"></script>
        <script src="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue-icons.min.js"></script>
      </head>
    ```

* Instalacion con NPM:
```bash
npm i bootstrap-vue
```

* Instalacion con Yarn:
```bash
yarn add bootstrap-vue
```

* utilizacion en el main.js o index.js
  ```js
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap-vue/dist/bootstrap-vue.css';

    import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

    // Install BootstrapVue
    Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
    Vue.use(IconsPlugin)
  ```
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
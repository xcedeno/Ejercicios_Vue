var eventosGlobales = new Vue();

Vue.component("producto", {
    template: `
        <div>
            <div class="product">
                <div class="product-image">
                    <img :src="image" :alt="alter">
                </div>
                <div class="product-info">
                    <h1 v-text="producto"></h1>
                    <a :href="mas" target="_blank">Mas información aquí</a>
                    <p v-if="variantes[seleccion].stock > 10">En Inventario</p>
                    <p v-else-if="variantes[seleccion].stock <= 10 && variantes[seleccion].stock > 0">Últimas unidades</p>
                    <p v-else :class="{noInven: stockZero}">Sin inventario</p>
                    <detalles_tab :shippingTo="shipping"></detalles_tab>
                    <p>Variantes</p>
                    <ul>
                        <li v-for="(variante,index) in variantes" :key="index" @mouseover="cambioColor(index)" class="color-box" :style="{backgroundColor: variante.variantColor }">
                        </li>
                    </ul>
                    <p>Tallas</p>
                    <ul>
                        <li v-for="(talla,index) in medidas" :key="index">
                            {{talla}}
                        </li>
                    </ul>
                    <producto_tab :reviewRecibido="reviewRecibido"></producto_tab>
                    <button @click="comprar" type="button" :disabled="stockZero" :class="{disabledButton: stockZero}">Agregar al Carro</button>
                    <venta_producto @quitarCarro="quitar"></venta_producto>
                    <div class="cart">
                        Cart:({{carro}})
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            producto: "Medias",
            seleccion: 0,
            image: 'assets/img/mediasNegras.jpg',
            alter: 'par de medias culquiera',
            mas: 'https://www.google.com/',
            stock: 2,
            variantes: [
                {
                    id: 0,
                    variantId: 2234,
                    variantColor: 'black',
                    variantImage: 'assets/img/mediasNegras.jpg',
                    stock: 20  
                },
                {
                    id:1,
                    variantId: 2235,
                    variantColor: 'gray',
                    variantImage: 'assets/img/mediasGris.jpg',
                    stock: 2
                }
            ],
            medidas: ["M","S","L"],
            carro: 0,
            reviewRecibido: []
        }
    },
    props: {
        vip: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        comprar(){
            let auxiliar2 = this.variantes.filter((valor)=>valor.variantImage == this.image);
            auxiliar2.forEach(element => {
                if (element.stock > 0) {
                    element.stock--;
                    this.carro++;
                }else{
                    alert("No existe stock del producto");
                }
            });
        },
        cambioColor(dato){
            this.image = this.variantes[dato].variantImage;
            this.seleccion = dato;
        },
        quitar(){
            let auxiliar3 = this.variantes.filter((valor)=>valor.variantImage == this.image);
            auxiliar3.forEach(element => {
                if (this.carro > 0 && this.seleccion == element.id) {
                    element.stock++;
                    this.carro--;
                }else{
                    alert("No existe producto en el carro. Seleccione el color adecuado");
                }
            });
        },
    },
    computed: {
        stockZero(){
            return this.variantes[this.seleccion].stock == 0;
        },
        shipping(){
            if (this.vip) {
                return 'Gratis'
            } else {
                return "4.000 CLP"
            }
        }
    },
    mounted() {
        eventosGlobales.$on('datosReview',reviewUsuario => {
            this.reviewRecibido.push(reviewUsuario);
        })
    },
});

Vue.component("detalles_producto", {
    template: `
        <div>
            <ul>
                <li v-for="(datalle,index) in detalles" :key="index">
                    {{datalle}}
                </li>
            </ul>
        </div>
    `,
    props: {
        detalles: {
            type: Array,
            required: true
        }
    }
});

Vue.component("venta_producto", {
    template: `
        <div>
            <button @click="quitar" type="button">Quitar del Carro</button>
        </div>
    `,
    methods: {
        quitar(){
            this.$emit("quitarCarro");
        }
    },
});

Vue.component('producto_likes', {
    template: `
        <div>
            <form class="review-form" @submit.prevent="onSubmit">
                <p v-show="errores.length">
                    <b>Por favor, revise los siguientes errores:</b>
                    <ul class="errores">
                        <li v-for="(error,index) in errores" :key="index">
                            {{error}}
                        </li>
                    </ul>
                </p>
                <p>
                    <label for="nombre">Nombre:</label>
                    <input type="text" placeholder="Ingrese su nombre" name="nombre" id="nombre" v-model="nombre">
                </p>
                <p>
                    <label for="review">Review:</label>
                    <textarea name="review" id="review" cols="30" rows="10" v-model="review"></textarea>
                </p>
                <p>
                    <label for="rating">Puntaje:</label>
                    <select id="rating" v-model.number="rating">
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </p>
                    <label for="recomienda">¿Recomendaria usted este producto?</label>
                    <div>
                        Si<input type="radio" id="si" value="si" v-model="pregunta" name="preguntas"> 
                        No<input type="radio" id="no" value="no" v-model="pregunta" name="preguntas">
                    </div>
                </p>
                <input type="submit" value="Enviar">
            </form>
        </div>
    `,
    data() {
        return {
            nombre: null,
            review: null,
            rating: null,
            errores: [],
            pregunta: null,
        }
    },
    methods: {
        onSubmit(){
            if (this.nombre && this.review && this.rating && this.pregunta) {
                let reviewUsuario = {
                    nombre: this.nombre,
                    review: this.review,
                    rating: this.rating,
                    pregunta: this.pregunta
                };
                eventosGlobales.$emit("datosReview",reviewUsuario)
                this.nombre = null;
                this.review = null;
                this.rating = null;
                this.pregunta = null
                this.errores = [];
            } else {
                if (!this.nombre) {
                    this.errores.push("Nombre Requerido...");
                };
                if (!this.review) {
                    this.errores.push("Se requiere un review");
                };
                if (!this.rating) {
                    this.errores.push("Debe Seleccionar un puntaje")
                }
                if (!this.pregunta) {
                    this.errores.push("Debe Seleccionar una respuesta a la pregunta")
                }
            }
        }
    },
});

Vue.component("detalles_tab", {
    template: `
        <div>
            <span 
                class="tab"
                :class="{activeTab: tabSeleccionado === tab}"
                v-for="(tab,index) in tabs"
                :key="index"
                @click="tabSeleccionado = tab"
            >
                {{tab}}
            </span>
            <div v-show="tabSeleccionado == 'Envio'">
                <p>Envio: {{shippingTo}}</p>
            </div>
            <div v-show="tabSeleccionado == 'Detalles'">
                <detalles_producto :detalles="detalles"></detalles_producto>
            </div>

        </div>
    `,
    data() {
        return {
            tabs: ['Envio','Detalles'],
            tabSeleccionado: 'Envio',
            detalles: ["80% algodon", "20% poliester", "Para cualquier temporada"],
        }
    },
    props: {
        shippingTo: {
            type: String,
            required: true
        }
    }
});

Vue.component("producto_tab", {
    template: `
        <div>
            <span 
                class="tab"
                :class="{activeTab: tabSeleccionado === tab}"
                v-for="(tab,index) in tabs"
                :key="index"
                @click="tabSeleccionado = tab"
            >
                {{tab}}
            </span>
            <div v-show="tabSeleccionado === 'Reviews'">
                <h2>Review</h2>
                <p v-show="!reviewRecibido.length">Sin Review por los momentos | Se el primero</p>
                    <ul>
                        <li v-for="(revision,index) in reviewRecibido" :key="index">
                            <p>{{revision.nombre}}</p>
                            <p>{{revision.review}}</p>
                            <p>Rating: {{revision.rating}}</p>
                            <p v-text="revision.pregunta == 'si' ? 'Recomienda el Producto' : 'No recomienda el producto'"></p>
                        </li>
                    </ul>
            </div>
            <producto_likes v-show="tabSeleccionado === 'Hacer un comentario'"></producto_likes>
        </div>
    `,
    data() {
        return {
            tabs: ['Reviews','Hacer un comentario'],
            tabSeleccionado: 'Reviews'
        }
    },
    props: {
        reviewRecibido: {
            type: Array,
            required: true
        }
    }
})

var app = new Vue({
    el: '#app',
    data() {
        return {
            vip: true,
        }
    },
});
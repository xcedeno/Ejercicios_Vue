Vue.component("componente1", {
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
                    <ul>
                        <li v-for="(datalle,index) in detalles" :key="index">
                            {{datalle}}
                        </li>
                    </ul>
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
                    <button @click="comprar" type="button" :disabled="stockZero" :class="{disabledButton: stockZero}">Agregar al Carro</button>
                    <button @click="quitar" type="button">Quitar del Carro</button>
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
            detalles: ["80% algodon", "20% poliester", "Para cualquier temporada"],
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
            carro: 0
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
        }
    },
    computed: {
        stockZero(){
            return this.variantes[this.seleccion].stock == 0;
        }
    },
});

var app = new Vue({
    el: '#app',
});
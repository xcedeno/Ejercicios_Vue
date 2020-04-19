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
                    <p v-if="stock > 10">En Inventario</p>
                    <p v-else-if="stock <= 10 && stock > 0">Últimas unidades</p>
                    <p v-else>Sin inventario</p>
                    <ul>
                        <li v-for="(datalle,index) in detalles" :key="index">
                            {{datalle}}
                        </li>
                    </ul>
                    <p>Variantes</p>
                    <ul>
                        <li v-for="(variante,index) in variantes" :key="index" @mouseover="cambioColor(variante.variantId)">
                            {{variante.variantColor}}
                        </li>
                    </ul>
                    <p>Tallas</p>
                    <ul>
                        <li v-for="(talla,index) in medidas" :key="index">
                            {{talla}}
                        </li>
                    </ul>
                    <button @click="comprar" type="button">Agregar al Carro</button>
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
            image: 'assets/img/medias.jpg',
            alter: 'par de medias culquiera',
            mas: 'https://www.google.com/',
            stock: 2,
            detalles: ["80% algodon", "20% poliester", "Para cualquier temporada"],
            variantes: [
                {
                  variantId: 2234,
                  variantColor: 'Negro',
                  variantImage: 'assets/img/mediasNegras.jpg'    
                },
                {
                  variantId: 2235,
                  variantColor: 'Gris',
                  variantImage: 'assets/img/mediasGris.jpg'
                }
            ],
            medidas: ["M","S","L"],
            carro: 0
        }
    },
    methods: {
        comprar(){
            this.carro++;
        },
        cambioColor(dato){
            let auxiliar = this.variantes.filter((valor)=>valor.variantId == dato);
            auxiliar.forEach(element => {
                this.image = element.variantImage;
            });
        },
        quitar(){
            if (this.carro>0) {
                this.carro--;
            }else{
                alert("No se puede descontar");
            }
        }
    },
});

var app = new Vue({
    el: '#app',
});
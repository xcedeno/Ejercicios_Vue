const TheMain = {
    template: `
    <div class="container-fluid">
    <h1 class="main-title"> Valar Morghulis.. </h1>
    <h2 class="main-subtitle" ref="muestra" data-toggle="tooltip" data-placement="right" title="ejemplo tooltip ...">  Who's next? </h2>
    <div class="row">
      <div v-show="isAboutOpen" class="text-center text-md-left" id="quote-area" :class="quotesClass">
        <div class="spinner-container" v-if="apiCall">
          <div class="spinner-grow red-spinner" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <ul class="quote-list">
          <li v-for="(item,index) in selectedChar.quote" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="col-12">
        <div class="ch-body d-flex flex-column">
          <div class="body-row head-row d-flex justify-content-center">
            <PartSelected :parts="fileParts.heads" :aleatorio="randomHead" @cambiarSelectedIndex="valor => randomHead = !valor" @partSelected="partSelected"></PartSelected>
          </div>
          <div class="body-row middle-row d-flex justify-content-center">
            <PartSelected :parts="fileParts.middles" :aleatorio="randomBody" @cambiarSelectedIndex="valor => randomBody = !valor" @partSelected="partSelected"></PartSelected>
          </div>
          <div class="body-row foot-row d-flex justify-content-center">
            <PartSelected :parts="fileParts.foots" :aleatorio="randomFoot" @cambiarSelectedIndex="valor => randomFoot = !valor" @partSelected="partSelected"></PartSelected>
          </div>
        </div>
        <div class="btn-area d-flex justify-content-center">
          <div v-if="!capturaPantallaOn" class="btn-container d-flex justify-content-between">
            <button class="btn btn-light" @click="randomAll" data-toggle="tooltip" data-placement="top" title="Tooltip on top"> Random </button>
            <button id="about-btn" class="btn btn-light" @click="aboutToggle" ref="cerrando" data-toggle="tooltip" data-placement="right" title="Tooltip on right"> About </button>
            <button class="btn btn-light" @click="capturaPantalla"> Download </button>
          </div>
        </div>
      </div>
      <div v-show="isAboutOpen" id="about-area" :class="aboutClass">
        <div class="spinner-container" v-if="apiCall">
          <div class="spinner-grow red-spinner" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div class="text-center text-md-left" v-else>
          <p class="about-p"> <b> Name: </b>{{selectedChar.name}}</p>
          <p class="about-p"> <b> Born: </b>{{selectedChar.born}}</p>
          <p class="about-p"> <b> Gender: </b>{{selectedChar.gender}}</p>
          <p class="about-p"> <b> Titles: </b></p>
          <ul class="about-titles">
              <li v-for="(item,index) in selectedChar.titles" :key="index">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    `,
    data() {
        return {
            fileParts: bodies,
            randomHead: false,
            randomBody: false,
            randomFoot: false,
            selectedCharId: 1,
            selectedParts: {
              head: {},
              middle: {},
              foot: {}
            },
            isAboutOpen: false,
            quotesClass: 'col-12 col-md-4 quotes',
            aboutClass: 'col-12 col-md-4 about',
            figureClass: 'col-12',
            selectedChar: {
              id: 0,
              name: "",
              gender: '',
              born: '',
              titles: [],
              quote: []
            },
            apiCall: false,
            isAboutSelected: false,
            capturaPantallaOn: false
        }
    },
    methods: {
      capturaPantalla(){
        this.capturaPantallaOn = true;
        let selector = document.querySelector('main');
        html2canvas(selector).then(canvas=>{
          console.log(canvas);
          let croppedCanvas = document.createElement('canvas');
          croppedCanvasContext = croppedCanvas.getContext('2d');
          croppedCanvas.width = selector.clientWidth;
          croppedCanvas.height = selector.clientHeight;
          croppedCanvasContext.drawImage(canvas, 0, 0, selector.clientWidth, selector.clientHeight);
          return croppedCanvas;
        }).then(canvas => {
          let imgURL = canvas.toDataURL('image/png', 1.0);
          let link = document.createElement('a');
          link.download = "screenShot.png";
          link.href = imgURL;
          link.click();
          setTimeout(()=>{
            this.capturaPantallaOn = false;
          },1000);
        })
      },
      closeAbout(){
        this.apiCall = false;
        this.isAboutOpen = false;
        this.quotesClass = 'col-12 col-md-4 quotes';
        this.aboutClass = 'col-12 col-md-4 about';
        this.figureClass = 'col-12';
      },
      aboutCharacter(){
        if (this.isAboutSelected) {
          this.apiCall = true;
          this.isAboutOpen = true;
          this.aboutClass = "col-12 order-1 col-md-4 order-md-3 about area-active";
          this.quotesClass = "col-12 order-3 col-md-4 order-md-1 about area-active";
          this.figureClass = "col-12 order-2 col-md-4 order-md-2";
        }  

        if (this.isAboutOpen && this.selectedParts.head.id !== undefined) {
          let charApiId = this.selectedParts.head.apiId;
          if (charApiId !== null){
            let apiUrl = `https://anapioficeandfire.com/api/characters/${charApiId}`;
            this.llamandoApi(apiUrl);
          }
        } else {
          this.selectedChar.id = this.selectedCharId;
          this.selectedChar.name = 'No se encuentra el nombre';
          this.selectedChar.gender = '???';
          this.selectedChar.born = '???';
          this.selectedChar.titles = this.selectedParts.head;
          this.selectedChar.quote = ['No se sabe nada'];
          this.apiCall = false;
        }
      },
      async llamandoApi(apiUrl) {
        try {
          let respuesta = await axios.get(apiUrl);
          console.log(respuesta.data);
          this.selectedChar.id = this.selectedCharId;
          this.selectedChar.name = respuesta.data.name;
          this.selectedChar.gender = respuesta.data.gender;
          this.selectedChar.born = respuesta.data.born;
          this.selectedChar.titles = respuesta.data.titles;
          this.selectedChar.quote = this.selectedParts.head.quotes;
          this.apiCall = false;
        } catch (error) {
          console.error(error);
          this.apiCall = false;
        }
      },
      randomAll(){
        this.randomHead = true;
        this.randomBody = true;
        this.randomFoot = true;
      },
      partSelected(valor){
        if (valor.type == 'heads'){
          this.selectedParts.head = valor;
          this.selectedCharId = valor.id;
          this.aboutCharacter();
        };
        if (valor.type == 'middles') {
          this.selectedParts.middle = valor;
        }
        if (valor.type == 'foots') {
          this.selectedParts.foot = valor;
        }
      },
      aboutToggle(){
        if (this.isAboutOpen) {
          this.$refs.cerrando.innerHTML = "About";
          this.closeAbout();
        } else {
          this.isAboutSelected = true;
          this.$refs.cerrando.innerHTML = "Cerrar";
          this.aboutCharacter();
        }
      }
    },
    components: { 
      PartSelected,
    },
    mounted() {
      $(this.$refs.muestra).tooltip('show');
    },
}
const TheMain = {
    template: `
    <div class="container-fluid">
    <h1 class="main-title"> Valar Morghulis.. </h1>
    <h2 class="main-subtitle">  Who's next? </h2>
    <div class="row">
      <!-- <div class="text-center text-md-left" id="quote-area">
        <div class="spinner-container">
          <div class="spinner-grow red-spinner" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <ul class="quote-list">
          <li></li>
        </ul>
      </div> -->
      <div class="col-12">
        <div class="ch-body d-flex flex-column">
          <div class="body-row head-row d-flex justify-content-center">
            <PartSelected :parts="fileParts.heads" :aleatorio="randomHead"></PartSelected>
          </div>
          <div class="body-row middle-row d-flex justify-content-center">
            <PartSelected :parts="fileParts.middles" :aleatorio="randomBody"></PartSelected>
          </div>
          <div class="body-row foot-row d-flex justify-content-center">
            <PartSelected :parts="fileParts.foots" :aleatorio="randomFoot"></PartSelected>
          </div>
        </div>
        <div class="btn-area d-flex justify-content-center">
          <div class="btn-container d-flex justify-content-between">
            <button class="btn btn-light" @click="randomAll"> Random </button>
            <button id="about-btn" class="btn btn-light"> About </button>
            <button class="btn btn-light"> Download </button>
          </div>
        </div>
      </div>
<!--           <div id="about-area">
        <div class="spinner-container">
          <div class="spinner-grow red-spinner" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div class="text-center text-md-left">
          <p class="about-p"> <b> Name: </b></p>
          <p class="about-p"> <b> Born: </b></p>
          <p class="about-p"> <b> Culture: </b></p>
          <p class="about-p"> <b> Titles: </b></p>
          <ul class="about-titles">
              <li></li>
          </ul>
        </div>
      </div> -->
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
            }
        }
    },
    methods: {
      randomAll(){
        this.randomHead = true;
        this.randomBody = true;
        this.randomFoot = true;
      }
    },
    components: { 
      PartSelected,
    }
}
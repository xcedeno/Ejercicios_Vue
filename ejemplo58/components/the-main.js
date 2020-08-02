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
            <div class="body-part position-relative">
              <div class="prev-area" @mouseover="hoverPrev = true" @mouseleave="hoverPrev = false">
                <button class="prev-btn" v-show="hoverPrev" @click="selectPrevHead">&#10094;</button>
              </div>
              <img :src="fileParts.heads[selectedHeadIndex].src" :alt="fileParts.heads[selectedHeadIndex].id" class="body-img heads-img about-selected">
              <div class="next-area" @mouseover="hoverNext = true" @mouseleave="hoverNext = false">
                <button class="next-btn" v-show="hoverNext" @click="selectNextHead">&#10095;</button>
              </div>
            </div>
          </div>
          <div class="body-row middle-row d-flex justify-content-center">
            <div class="body-part position-relative">
              <div class="prev-area">
                <button class="prev-btn">&#10094;</button>
              </div>
              <img src="./assets/body-parts/j2.png" alt="j1" class="body-img heads-img about-selected">
              <div class="next-area">
                <button class="next-btn">&#10095;</button>
              </div>
            </div>
          </div>
          <div class="body-row foot-row d-flex justify-content-center">
            <div class="body-part position-relative">
              <div class="prev-area">
                <button class="prev-btn">&#10094;</button>
              </div>
              <img src="./assets/body-parts/j3.png" alt="j1" class="body-img heads-img about-selected">
              <div class="next-area">
                <button class="next-btn">&#10095;</button>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-area d-flex justify-content-center">
          <div class="btn-container d-flex justify-content-between">
            <button class="btn btn-light"> Random </button>
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
            hoverPrev: false,
            hoverNext: false,
            selectedHeadIndex: 0,
            selectedBodyIndex: 0,
            selectedFootIndex: 0,
            minIndex: 0,
            maxIndex: bodies.heads.length - 1
        }
    },
    methods: {
        selectPrevHead(){
            this.selectedHeadIndex = this.selectedHeadIndex > this.minIndex ? this.selectedHeadIndex-1 : this.maxIndex;
        },
        selectNextHead(){
            this.selectedHeadIndex = this.selectedHeadIndex < this.maxIndex ? this.selectedHeadIndex+1 : this.minIndex; 
        }
    },
}
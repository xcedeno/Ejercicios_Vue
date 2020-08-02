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
              <div class="prev-area">
                <button class="prev-btn">&#10094;</button>
              </div>
              <img src="./assets/body-parts/j1.png" alt="j1" class="body-img heads-img about-selected">
              <div class="next-area">
                <button class="next-btn">&#10095;</button>
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
    `
}
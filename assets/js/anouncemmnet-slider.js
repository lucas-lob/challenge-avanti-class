{

    sliderSettings = {
        bottomCirclesID: "anouncemment-slider-bottom-circles"
    }


    // Global variables
    bottomCirclesDiv = document.getElementById(sliderSettings.bottomCirclesID)

    // Creates bottom circles
    bottomCirclesDiv.innerHTML =
        `
                    <span class="material-icons anouncemment-slider-bottom-selected-circle">circle</span>
                    <span class="material-icons">circle</span>
                    <span class="material-icons">circle</span>

        `
    let bottomCircles = document.querySelector(`div.${sliderSettings.bottomCirclesClass}`)



}
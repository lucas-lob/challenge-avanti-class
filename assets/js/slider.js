// Settings of the slider
sliderSettings = {
    sliderID: "top-slider",
    buttonsClass: "slider-buttons",
    cardsClass: "top-slider-cards"
}



// Global variables
const slider = document.getElementById(sliderSettings.sliderID)



// Creates slider buttons
oldHTML = slider.innerHTML
slider.innerHTML = 
`
                <div class="${sliderSettings.buttonsClass}">
                    <button type="button" class="material-symbols-outlined left-arrow">arrow_back</button>
                    <button type="button" class="material-symbols-outlined right-arrow">arrow_forward</button>
                </div>
` + oldHTML

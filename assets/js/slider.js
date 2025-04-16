function updateCards() {
    cardsDiv = document.getElementById(sliderSettings.divCardsID)
    bottomCircles = document.querySelector(`div.${sliderSettings.bottomCirclesClass}`)

    for (let i = lastIndex + 1; i < cardsDiv.childElementCount; i++) {
        cardsDiv.children[i].classList.add("undisplayed-card")
        cardsDiv.children[i].classList.add("to-right")
    }

    for (let i = firtsIndex; i > 0; i--) {
        cardsDiv.children[i - 1].classList.add("undisplayed-card")
        cardsDiv.children[i - 1].classList.add("to-left")
    }

    for (let i = firtsIndex; i <= lastIndex; i++) {
        cardsDiv.children[i].classList.remove("undisplayed-card")
        cardsDiv.children[i].classList.remove("to-left")
        cardsDiv.children[i].classList.remove("to-right")
    }

    // Bottoms circle animation
    if(firtsIndex === 0){
        bottomCircles.children[0].classList.add("slider-bottom-circle-selected")
        bottomCircles.children[1].classList.remove("slider-bottom-circle-selected")
        bottomCircles.children[2].classList.remove("slider-bottom-circle-selected")
    } else if(lastIndex === cardsDiv.childElementCount - 1){
        bottomCircles.children[0].classList.remove("slider-bottom-circle-selected")
        bottomCircles.children[1].classList.remove("slider-bottom-circle-selected")
        bottomCircles.children[2].classList.add("slider-bottom-circle-selected")
    } else {
        bottomCircles.children[0].classList.remove("slider-bottom-circle-selected")
        bottomCircles.children[1].classList.add("slider-bottom-circle-selected")
        bottomCircles.children[2].classList.remove("slider-bottom-circle-selected")
    }
}

// Settings of the slider
sliderSettings = {
    sliderID: "top-slider",
    divCardsID: "top-slider-cards",
    buttonsClass: "slider-buttons",
    bottomCirclesClass: "slider-bottom-circles",
}



// Global variables
const slider = document.getElementById(sliderSettings.sliderID)
let cardsDiv = document.getElementById(sliderSettings.divCardsID)

let firtsIndex = 0
let lastIndex = 4



// Creates bottom circles
slider.innerHTML +=
    `
                <div class="${sliderSettings.bottomCirclesClass}">
                    <span class="material-icons">circle</span>
                    <span class="material-icons">circle</span>
                    <span class="material-icons">circle</span>
                </div> 
    `
let bottomCircles = document.querySelector(`div.${sliderSettings.bottomCirclesClass}`)


// Creates slider buttons
oldHTML = slider.innerHTML
slider.innerHTML =
    `
                <div class="${sliderSettings.buttonsClass}">
                    <button type="button" class="material-symbols-outlined">arrow_back</button>
                    <button type="button" class="material-symbols-outlined">arrow_forward</button>
                </div> 
                ${oldHTML}
    `



// Left button function
const leftBtn = document.querySelector(`div.${sliderSettings.buttonsClass} button:nth-child(1)`)

leftBtn.addEventListener("click", () => {
    if (firtsIndex > 0) {
        firtsIndex--
        lastIndex--
        updateCards()
    }
})



// Right button function
const rightBtn = document.querySelector(`div.${sliderSettings.buttonsClass} button:nth-child(2)`)

rightBtn.addEventListener("click", () => {
    if (lastIndex < cardsDiv.childElementCount - 1) {
        firtsIndex++
        lastIndex++
        updateCards()
    }
})



// Hides all initial undisplayed cards
updateCards()

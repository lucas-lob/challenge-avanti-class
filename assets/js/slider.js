function updateCards() {
    cardsDiv = document.getElementById(sliderSettings.divCardsID)
    bottomCircles = document.querySelector(`div.${sliderSettings.bottomCirclesClass}`)

    for (let i = lastIndex + 1; i < cardsDiv.childElementCount; i++) {
        cardsDiv.children[i].classList.add("undisplayed-card")
        cardsDiv.children[i].classList.add("to-right")
    }

    for (let i = firstIndex; i > 0; i--) {
        cardsDiv.children[i - 1].classList.add("undisplayed-card")
        cardsDiv.children[i - 1].classList.add("to-left")
    }

    for (let i = firstIndex; i <= lastIndex; i++) {
        cardsDiv.children[i].classList.remove("undisplayed-card")
        cardsDiv.children[i].classList.remove("to-left")
        cardsDiv.children[i].classList.remove("to-right")
    }

    // Bottoms circle animation
    if (firstIndex === 0) {
        bottomCircles.children[0].classList.add("slider-bottom-circle-selected")
        bottomCircles.children[1].classList.remove("slider-bottom-circle-selected")
        bottomCircles.children[2].classList.remove("slider-bottom-circle-selected")
    } else if (lastIndex === cardsDiv.childElementCount - 1) {
        bottomCircles.children[0].classList.remove("slider-bottom-circle-selected")
        bottomCircles.children[1].classList.remove("slider-bottom-circle-selected")
        bottomCircles.children[2].classList.add("slider-bottom-circle-selected")
    } else {
        bottomCircles.children[0].classList.remove("slider-bottom-circle-selected")
        bottomCircles.children[1].classList.add("slider-bottom-circle-selected")
        bottomCircles.children[2].classList.remove("slider-bottom-circle-selected")
    }
}

function responsiveUpdateCards() {
    if (screenSize > sliderSettings.desktopMinScreenSize) {
        if (displayedCards !== 5) {
            displayedCards = 5
            firstIndex = 0
            lastIndex = 4

            updateCards()
        }
    } else if (screenSize > sliderSettings.bigTabletMinScreenSize) {
        if (displayedCards !== 4) {
            displayedCards = 4
            firstIndex = 0
            lastIndex = 3

            updateCards()
        }
    } else if (screenSize > sliderSettings.smallTabletMinScreenSize) {
        if (displayedCards !== 3) {
            displayedCards = 3
            firstIndex = 0
            lastIndex = 2

            updateCards()
        }
    } else {
        if (displayedCards !== 2) {
            displayedCards = 2
            firstIndex = 0
            lastIndex = 1

            updateCards()
        }
    }
}



// Settings of the slider
sliderSettings = {
    sliderID: "top-slider",
    divCardsID: "top-slider-cards",
    buttonsClass: "slider-buttons",
    bottomCirclesClass: "slider-bottom-circles",
    desktopMinScreenSize: 1360,
    bigTabletMinScreenSize: 1100,
    smallTabletMinScreenSize: 820,
}



// Global variables
const slider = document.getElementById(sliderSettings.sliderID)
let cardsDiv = document.getElementById(sliderSettings.divCardsID)

let firstIndex = 0
let lastIndex = 4
let displayedCards = 5
let screenSize = window.innerWidth
let screenResizeTimeout = 0


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
    if (firstIndex > 0) {
        firstIndex--
        lastIndex--
        updateCards()
    }
})



// Right button function
const rightBtn = document.querySelector(`div.${sliderSettings.buttonsClass} button:nth-child(2)`)

rightBtn.addEventListener("click", () => {
    if (lastIndex < cardsDiv.childElementCount - 1) {
        firstIndex++
        lastIndex++
        updateCards()
    }
})



// Initializes the cards 
if (screenSize > sliderSettings.desktopMinScreenSize) {
    updateCards()
} else {
    responsiveUpdateCards()
}


// Hides all undisplayed cards in screen resize
window.addEventListener("resize", () => {
    clearTimeout(screenResizeTimeout)

    screenResizeTimeout = setTimeout(() => {
        screenSize = window.innerWidth
        responsiveUpdateCards()
    }, 50)
})


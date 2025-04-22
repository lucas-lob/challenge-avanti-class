function startCardsPosition() {
    cardsDiv = document.getElementById(sliderSettings.divCardsID)
    bottomCircles = document.querySelector(`div.${sliderSettings.bottomCirclesClass}`)

    for (let i = 1; i < cardsDiv.childElementCount; i++) {
        cardsDiv.children[i].style.transform = `translate(calc((${i} * 100%) + (${i} * 10px)))`
    }
}

function updateBottomButtons() {
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

function sliderRightMoviment() {
    for (let i = 0; i <= lastIndex; i++) {
        cardTranslate[i] = cardTranslate[i] + 1
        cardsDiv.children[i].style.transform = `translateX(calc(${cardTranslate[i]} * (-100% - 10px)))`
    }
}

function sliderLeftMoviment() {
    for (let i = 0; i <= lastIndex; i++) {
        cardTranslate[i] = cardTranslate[i] - 1
        cardsDiv.children[i].style.transform = `translateX(calc(${cardTranslate[i]} * (-100% - 10px)))`
    }
}

function createArrowButtons() {
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
        clearTimeout(sliderMovementTimeout)

        sliderMovementTimeout = setTimeout(() => {
            if (firstIndex > 0) {
                sliderLeftMoviment()
                firstIndex--
                lastIndex--
                updateBottomButtons()
            }
        }, 200)
    })



    // Right button function
    const rightBtn = document.querySelector(`div.${sliderSettings.buttonsClass} button:nth-child(2)`)

    rightBtn.addEventListener("click", () => {
        clearTimeout(sliderMovementTimeout)

        sliderMovementTimeout = setTimeout(() => {
            if (lastIndex < cardsDiv.childElementCount - 1) {
                firstIndex++
                lastIndex++
                sliderRightMoviment()
                updateBottomButtons()
            }
        }, 200)
    })
}

function updateArrowButtons() {
    arrowButtons = document.querySelectorAll(`div.${sliderSettings.buttonsClass}`)

    // If desktop screen size
    if(screenSize > sliderSettings.smallTabletMinScreenSize){
        // If exists no arrow buttons
        if(arrowButtons.length === 0){
            createArrowButtons()
        }
    }
    // If mobile screen size
    else {
        // If exists arrow buttons
        if(arrowButtons.length !== 0){
            arrowButtons[0].remove()
        }
    }
}


// Settings of the slider
sliderSettings = {
    sliderID: "top-slider",
    divCardsID: "top-slider-cards",
    cardsClass: "top-slider-card",
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
let lastIndex = 0
let displayedCards = 0
let screenSize = window.innerWidth
let screenResizeTimeout = 0
let sliderMovementTimeout = 0

cardTranslate = {}
for (let i = 0; i < cardsDiv.childElementCount; i++) {
    cardTranslate[i] = 0
}



// Creates bottom circles
slider.innerHTML +=
    `
                <div class="${sliderSettings.bottomCirclesClass}">
                    <span class="material-icons slider-bottom-circle-selected">circle</span>
                    <span class="material-icons">circle</span>
                    <span class="material-icons">circle</span>
                </div> 
    `
let bottomCircles = document.querySelector(`div.${sliderSettings.bottomCirclesClass}`)



// Initializes the slider 
if(screenSize > sliderSettings.smallTabletMinScreenSize){
    createArrowButtons()
}
startCardsPosition()



// Hides all undisplayed cards in screen resize
window.addEventListener("resize", () => {
    clearTimeout(screenResizeTimeout)

    screenResizeTimeout = setTimeout(() => {
        screenSize = window.innerWidth
        updateArrowButtons()
        startCardsPosition()
    }, 50)
})


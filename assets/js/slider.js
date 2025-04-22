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
    firstCardVisible++
    lastCardVisible++

    try {
        
        cardsDiv.children[lastCardVisible - 1].scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        })
    } catch {
        firstCardVisible--
        lastCardVisible--
    }
}

function sliderLeftMoviment() {
    if (firstCardVisible > 1) {
        firstCardVisible--
        lastCardVisible--

        cardsDiv.children[firstCardVisible - 1].scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        })

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
            sliderLeftMoviment()
            updateBottomButtons()
        }, 200)
    })



    // Right button function
    const rightBtn = document.querySelector(`div.${sliderSettings.buttonsClass} button:nth-child(2)`)

    rightBtn.addEventListener("click", () => {
        clearTimeout(sliderMovementTimeout)

        sliderMovementTimeout = setTimeout(() => {
            firstIndex++
            lastIndex++
            sliderRightMoviment()
            updateBottomButtons()
        }, 200)
    })
}

function updateArrowButtons() {
    arrowButtons = document.querySelectorAll(`div.${sliderSettings.buttonsClass}`)

    // If desktop screen size
    if (screenSize > sliderSettings.smallTabletMinScreenSize) {
        // If exists no arrow buttons
        if (arrowButtons.length === 0) {
            createArrowButtons()
        }
    }
    // If mobile screen size
    else {
        // If exists arrow buttons
        if (arrowButtons.length !== 0) {
            arrowButtons[0].remove()
        }
    }
}

function updateScreenSizeInfos() {
    if (screenSize > sliderSettings.desktopMinScreenSize) {
        screenSizeDesktop = true
        screenSizeBigTablet = false
        screenSizeSmallTablet = false

        firstCardVisible = 1
        lastCardVisible = 5
    } else if (screenSize > sliderSettings.bigTabletMinScreenSize) {
        screenSizeDesktop = false
        screenSizeBigTablet = true
        screenSizeSmallTablet = false

        firstCardVisible = 1
        lastCardVisible = 4
    } else if (screenSize > sliderSettings.smallTabletMinScreenSize) {
        screenSizeDesktop = false
        screenSizeBigTablet = false
        screenSizeSmallTablet = true

        firstCardVisible = 1
        lastCardVisible = 3
    } else {
        screenSizeDesktop = false
        screenSizeBigTablet = false
        screenSizeSmallTablet = false

        firstCardVisible = 1
        lastCardVisible = 2
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

let firstCardVisible = 1
let lastCardVisible = 0



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
if (screenSize > sliderSettings.smallTabletMinScreenSize) {
    createArrowButtons()
}
startCardsPosition()
updateScreenSizeInfos()


// Update slider in screen resizing
window.addEventListener("resize", () => {
    clearTimeout(screenResizeTimeout)

    screenResizeTimeout = setTimeout(() => {
        screenSize = window.innerWidth
        updateArrowButtons()
        updateScreenSizeInfos()

        cardsDiv.children[0].scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        })
    }, 50)
})


{
    function startCardsPosition() {
        cardsDiv = document.getElementById(sliderSettings.divCardsID)
        bottomCircles = document.querySelector(`div.${sliderSettings.bottomCirclesClass}`)

        for (let i = 1; i < cardsDiv.childElementCount; i++) {
            cardsDiv.children[i].style.transform = `translate(calc((${i} * 100%) + (${i} * 10px)))`
        }
    }

    function updateBottomButtons(version) {
        let delay = 0
        if(version === "touch"){
            delay = 500
        } else {
            delay = 300
        }

        setTimeout(() => {
            let firstCardPosition = cardsDiv.children[0].getBoundingClientRect().x
            let lastCardPosition = cardsDiv.children[cardsDiv.childElementCount - 1].getBoundingClientRect().x
            let containerStartPosition = cardsDiv.getBoundingClientRect().x
            let containerEndPosition = cardsDiv.getBoundingClientRect().x + cardsDiv.getBoundingClientRect().width

            if (firstCardPosition >= containerStartPosition) {
                bottomCircles.children[0].classList.add("slider-bottom-circle-selected")
                bottomCircles.children[1].classList.remove("slider-bottom-circle-selected")
                bottomCircles.children[2].classList.remove("slider-bottom-circle-selected")
            } else if (lastCardPosition <= containerEndPosition) {
                bottomCircles.children[0].classList.remove("slider-bottom-circle-selected")
                bottomCircles.children[1].classList.remove("slider-bottom-circle-selected")
                bottomCircles.children[2].classList.add("slider-bottom-circle-selected")
            } else {
                bottomCircles.children[0].classList.remove("slider-bottom-circle-selected")
                bottomCircles.children[1].classList.add("slider-bottom-circle-selected")
                bottomCircles.children[2].classList.remove("slider-bottom-circle-selected")
            }
        }, 400)
    }

    function sliderRightMoviment() {
        firstCardPosition = cardsDiv.children[0].getBoundingClientRect().x
        lastCardPosition = cardsDiv.children[cardsDiv.childElementCount - 1].getBoundingClientRect().x

        if (lastCardPosition > containerEndPosition) {
            cardsDiv.scrollBy({
                left: cardsDiv.children[0].getBoundingClientRect().width,
                behavior: "smooth"
            })
        }
    }

    function sliderLeftMoviment() {
        firstCardPosition = cardsDiv.children[0].getBoundingClientRect().x
        lastCardPosition = cardsDiv.children[cardsDiv.childElementCount - 1].getBoundingClientRect().x

        if (firstCardPosition < containerStartPosition) {
            cardsDiv.scrollBy({
                left: -cardsDiv.children[0].getBoundingClientRect().width,
                behavior: "smooth"
            })
        }
    }

    function createArrowButtons() {
        oldHTML = slider.innerHTML
        slider.innerHTML =
            `
                <div class="${sliderSettings.buttonsClass} arrow-button">
                    <button type="button" class="material-symbols-outlined">arrow_back</button>
                    <button type="button" class="material-symbols-outlined">arrow_forward</button>
                </div> 
                ${oldHTML}
    `

        // Left button function
        let leftBtn = document.querySelector(`div.${sliderSettings.buttonsClass} button:nth-child(1)`)

        leftBtn.addEventListener("click", () => {
            clearTimeout(sliderMovementTimeout)

            sliderMovementTimeout = setTimeout(() => {
                sliderLeftMoviment()
                updateBottomButtons("click")
            }, 200)
        })



        // Right button function
        let rightBtn = document.querySelector(`div.${sliderSettings.buttonsClass} button:nth-child(2)`)

        rightBtn.addEventListener("click", () => {
            clearTimeout(sliderMovementTimeout)

            sliderMovementTimeout = setTimeout(() => {
                firstIndex++
                lastIndex++
                sliderRightMoviment()
                updateBottomButtons("click")
            }, 200)
        })
    }



    // Settings of the slider
    sliderSettings = {
        sliderID: "bottom-slider",
        divCardsID: "bottom-slider-cards",
        cardsClass: "bottom-slider-card",
        buttonsClass: "bottom-slider-buttons",
        bottomCirclesClass: "bottom-slider-bottom-circles",
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
    let touchTimeout = 0

    let firstCardPosition = 0
    let lastCardPosition = 0

    let = containerStartPosition = cardsDiv.getBoundingClientRect().x
    let = containerEndPosition = cardsDiv.getBoundingClientRect().x + cardsDiv.getBoundingClientRect().width



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
    createArrowButtons()
    startCardsPosition()


    // Update slider in screen resizing
    window.addEventListener("resize", () => {
        clearTimeout(screenResizeTimeout)

        screenResizeTimeout = setTimeout(() => {
            screenSize = window.innerWidth

            containerStartPosition = cardsDiv.getBoundingClientRect().x
            containerEndPosition = cardsDiv.getBoundingClientRect().x + cardsDiv.getBoundingClientRect().width

            updateBottomButtons("touch")
        }, 50)
    })
}

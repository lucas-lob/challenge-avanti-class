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
        }, delay)
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
    let touchTimeout = 0

    let firstCardVisible = 1
    let lastCardVisible = 0



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



    // Adds touch screen event to change bottom circles in mobile devices
    slider.addEventListener("touchend", () => {
        updateBottomButtons("touch")
    })


    // Initializes the slider 
    createArrowButtons()
    startCardsPosition()
    updateScreenSizeInfos()


    // Update slider in screen resizing
    window.addEventListener("resize", () => {
        clearTimeout(screenResizeTimeout)

        screenResizeTimeout = setTimeout(() => {
            screenSize = window.innerWidth
            updateScreenSizeInfos()
            updateBottomButtons()

            cardsDiv.children[0].scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }, 50)
    })
}
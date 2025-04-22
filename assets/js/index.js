// Global variables
const searchInputBarMobile = document.getElementById("mobile-top-search-bar")
const searchInputButtonMobile = document.getElementById("mobile-top-search-bar-button")
const searchInputResultMobile = document.getElementById("mobile-top-search-bar-result")

const searchInputBarDesktop = document.getElementById("desktop-top-search-bar")
const searchInputButtonDesktop = document.getElementById("desktop-top-search-bar-button")
const searchInputResultDesktop = document.getElementById("desktop-top-search-bar-result")

const searchInputContainer = document.getElementsByClassName("top-search-bar-result")
const searchInputCloseButton = document.getElementsByClassName("top-search-bar-close-button")


// === MOBILE ==== //
// Search bar buttons functions
searchInputButtonMobile.addEventListener("click", () => {
    if (searchInputBarMobile.value !== "") {
        searchInputResultMobile.innerHTML = searchInputBarMobile.value
        searchInputBarMobile.value = ""
        searchInputContainer[1].classList.remove("none")
    }
})

searchInputCloseButton[1].addEventListener("click", () => {
    searchInputContainer[1].classList.add("none")
})



// === DESKTOP === //
// Search bar buttons functions
searchInputButtonDesktop.addEventListener("click", () => {
    if (searchInputBarDesktop.value !== "") {
        searchInputResultDesktop.innerHTML = searchInputBarDesktop.value
        searchInputBarDesktop.value = ""
        searchInputContainer[0].classList.remove("none")
    }
})

searchInputCloseButton[0].addEventListener("click", () => {
    searchInputContainer[0].classList.add("none")
})


// Global variables
const searchInputBarMobile = document.getElementById("mobile-top-search-bar")
const searchInputButtonMobile = document.getElementById("mobile-top-search-bar-button")
const searchInputResultMobile = document.getElementById("mobile-top-search-bar-result")

const searchInputBarDesktop = document.getElementById("desktop-top-search-bar")
const searchInputButtonDesktop = document.getElementById("desktop-top-search-bar-button")
const searchInputResultDesktop = document.getElementById("desktop-top-search-bar-result")

// === MOBILE ==== //
// Search bar buttons functions
searchInputButtonMobile.addEventListener("click", () => {
    if (searchInputBarMobile.value !== "") {
        searchInputResultMobile.innerHTML = searchInputBarMobile.value
    }
})



// === DESKTOP === //
// Search bar buttons functions
searchInputButtonDesktop.addEventListener("click", () => {
    if (searchInputBarDesktop.value !== "") {
        searchInputResultDesktop.innerHTML = searchInputBarDesktop.value
    }
})


function resetMobileMenuHamburguerStyles() {
    for (var i = 0; i < departmentsMobileHmaburguerMenuItems.length; i++) {
        departmentsMobileHmaburguerMenuItems[i].classList.remove("hover-color")
        departmentsMobileHmaburguerMenuItems[i].classList.remove("hover-bold")
    }
}

// Global variables
const showMobileHamburguerMenuBtn = document.getElementById("mobile-hamburguer-menu-show-button")
const closeMobileHmaburguerMenuBtn = document.getElementById("mobile-hamburguer-menu-close-button")
const mobileHamburguerMenu = document.getElementById("mobile-hamburguer-menu")

// Adds events listeners for open/close the menu hamburguer
showMobileHamburguerMenuBtn.addEventListener("click", () => {
    if (!mobileHamburguerMenu.classList.contains("displayed-hamburguer-menu")) {
        mobileHamburguerMenu.classList.add("displayed-hamburguer-menu")
    } else {
        mobileHamburguerMenu.classList.remove("displayed-hamburguer-menu")
    }
})

closeMobileHmaburguerMenuBtn.addEventListener("click", () => {
    mobileHamburguerMenu.classList.remove("displayed-hamburguer-menu")
})



// Adds event listener for all departments of the mobile hamburguer menu
const departmentsMobileHmaburguerMenuItems = document.querySelectorAll("header div.mobile nav#hamburguer-menu-departments ul li")

for (var i = 0; i < departmentsMobileHmaburguerMenuItems.length; i++) {
    departmentsMobileHmaburguerMenuItems[i].addEventListener("click", (element) => {
        resetMobileMenuHamburguerStyles()
        element.target.classList.add("hover-color")
        element.target.classList.add("hover-bold")
    })
}
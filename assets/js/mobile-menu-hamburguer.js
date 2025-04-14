function resetMobileMenuHamburguerStyles() {
    for (var i = 0; i < departmentsMobileHmaburguerMenuItems.length; i++) {
        departmentsMobileHmaburguerMenuItems[i].classList.remove("hover-color")
        departmentsMobileHmaburguerMenuItems[i].classList.remove("hover-bold")
    }
}

// Global variables
const body = document.querySelector("body")
const showMobileHamburguerMenuBtn = document.querySelector("header div.mobile button#show-hamburguer-menu-button")
const mobileHamburguerMenu = document.querySelector("header div.mobile div#hamburguer-menu")

let openingTimeout = 0

// Adds events listeners for open/close the menu hamburguer
mobileHamburguerMenu.addEventListener("click", () => {
    setTimeout(() => {
        clearTimeout(openingTimeout)
    }, 10)
})

showMobileHamburguerMenuBtn.addEventListener("click", () => {
    setTimeout(() => {
        if(mobileHamburguerMenu.classList.contains("hidden")){
            mobileHamburguerMenu.classList.remove("hidden")
            mobileHamburguerMenu.classList.add("show")

            clearTimeout(openingTimeout)
    
            setTimeout(() => {
                mobileHamburguerMenu.classList.add("fullsize")
                mobileHamburguerMenu.classList.remove("nosize")
                departmentsMobileHmaburguerMenuItems[0].classList.toggle("hover-bold")
                departmentsMobileHmaburguerMenuItems[0].classList.toggle("hover-color")
            }, 10)
        } else {
            mobileHamburguerMenu.classList.remove("fullsize")
            mobileHamburguerMenu.classList.add("nosize")

            clearTimeout(openingTimeout)
    
            setTimeout(() => {
                mobileHamburguerMenu.classList.add("hidden")
                mobileHamburguerMenu.classList.remove("show")
            }, 200)
        }
    }, 10)
})

body.addEventListener("click", () => {
    openingTimeout = setTimeout(() => {
        if (mobileHamburguerMenu.classList.contains("show")) {
            mobileHamburguerMenu.classList.remove("fullsize")
            mobileHamburguerMenu.classList.add("nosize")

            resetMobileMenuHamburguerStyles()

            setTimeout(() => {
                mobileHamburguerMenu.classList.add("hidden")
                mobileHamburguerMenu.classList.remove("show")
            }, 200)
        }
    }, 100)
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
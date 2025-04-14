function resetMenuHamburguerStyles(isExpandedHamburguerMenu) {

    if (isExpandedHamburguerMenu == false) {
        headerMenuItems[0].classList.remove("hover-color")

        for (var i = 1; i < headerMenuItems.length; i++) {
            headerMenuItems[i].classList.remove("hover-color")
            headerMenuItems[i].classList.remove("hover-bold")
        }
    } else {
        for (var i = 0; i < departmentsMenuItems.length; i++) {
            departmentsMenuItems[i].classList.remove("hover-color")
            departmentsMenuItems[i].classList.remove("hover-bold")
        }
    }

}

function showExpandedHamburguerMenu(element) {
    clearTimeout(timeoutCloseID)

    hamburguerMenuCategoriesTitle.style.display = "none"

    hamburguerMenuDepartments.style.display = "flex"

    timeoutOpenID = setTimeout(() => {
        hamburguerMenu.style.display = "flex"
    }, 250)
    timeoutOpenID = setTimeout(() => {
        hamburguerMenu.style.opacity = "1"
    }, 260)


    resetMenuHamburguerStyles(false);
    resetMenuHamburguerStyles(true);
    element.srcElement.classList.add("hover-color")

    departmentsMenuItems[0].classList.add("hover-color")
    departmentsMenuItems[0].classList.add("hover-bold")
}

function showResumedHamburguerMenu(element) {
    clearTimeout(timeoutCloseID)

    hamburguerMenuCategoriesTitle.style.display = "block"
    hamburguerMenuCategories.style.opacity = "1"

    hamburguerMenuDepartments.style.display = "none"
    hamburguerMenuDepartments.classList.remove("bg-shadow")

    timeoutOpenID = setTimeout(() => {
        hamburguerMenu.style.display = "flex"
    }, 250)
    timeoutOpenID = setTimeout(() => {
        hamburguerMenu.style.opacity = "1"
    }, 260)


    resetMenuHamburguerStyles(false);
    element.srcElement.classList.add("hover-color")
    element.srcElement.classList.add("hover-bold")
}

function showDepartmentHamburguerMenu(element) {
    resetMenuHamburguerStyles(true);
    element.srcElement.classList.add("hover-color")
    element.srcElement.classList.add("hover-bold")

}

function closeHamburguerMenu() {
    clearTimeout(timeoutOpenID)

    resetMenuHamburguerStyles(false);

    hamburguerMenu.style.opacity = "0"
    timeoutCloseID = setTimeout(() => {
        hamburguerMenu.style.display = "none"
    }, 355)

}

// Global variables
const hamburguerMenu = document.querySelector("header div.desktop div#hamburguer-menu")
const menuHamburguerArea = document.querySelector("header div.desktop div#hamburguer-menu-area")
const hamburguerMenuDepartments = document.querySelector("header div.desktop nav#hamburguer-menu-departments")
const hamburguerMenuCategoriesTitle = document.querySelector("header div.desktop h4#hamburguer-menu-categories-title")
const hamburguerMenuCategories = document.querySelector("header div.desktop nav#hamburguer-menu-categories")
let timeoutCloseID = 0
let timeoutOpenID = 0

// Adds event listener for all expansive items of the hamburguer menu
const headerMenuItems = document.querySelectorAll("header div.desktop nav#hamburguer-menu-items ul li")
const departmentsMenuItems = document.querySelectorAll("header div.desktop nav#hamburguer-menu-departments ul li")

menuHamburguerArea.addEventListener("mouseleave", closeHamburguerMenu)
headerMenuItems[0].addEventListener("mouseenter", showExpandedHamburguerMenu)

for (var i = 1; i < headerMenuItems.length; i++) {
    headerMenuItems[i].addEventListener("mouseenter", showResumedHamburguerMenu)
}

for (var i = 0; i < departmentsMenuItems.length; i++) {
    departmentsMenuItems[i].addEventListener("mouseenter", showDepartmentHamburguerMenu)
}
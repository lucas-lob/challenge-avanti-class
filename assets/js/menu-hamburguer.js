function resetMenuHamburguerStyles(isExpandedHamburguerMenu) {

    if(isExpandedHamburguerMenu == false){
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
    hamburguerMenuCategoriesTitle.style.display = "none"
    hamburguerMenuCategories.style.opacity = "0"

    hamburguerMenuDepartments.style.display = "flex"

    hamburguerMenu.style.opacity = "1"

    resetMenuHamburguerStyles(false);
    resetMenuHamburguerStyles(true);
    element.srcElement.classList.add("hover-color")

    departmentsMenuItems[0].classList.add("hover-color")
    departmentsMenuItems[0].classList.add("hover-bold")

    showDepartmentHamburguerMenu()
}

function showResumedHamburguerMenu(element) {
    hamburguerMenuCategoriesTitle.style.display = "block"
    hamburguerMenuCategories.style.opacity = "1"

    hamburguerMenuDepartments.style.display = "none"
    hamburguerMenuDepartments.classList.remove("bg-shadow")

    hamburguerMenu.style.opacity = "1"

    resetMenuHamburguerStyles(false);
    element.srcElement.classList.add("hover-color")
    element.srcElement.classList.add("hover-bold")
}

function showDepartmentHamburguerMenu(element) {
    hamburguerMenuCategories.style.opacity = "1"

    hamburguerMenu.style.opacity = "1"

    if (element !== undefined){
        resetMenuHamburguerStyles(true);
        element.srcElement.classList.add("hover-color")
        element.srcElement.classList.add("hover-bold")
    }

}

function closeHamburguerMenu() {
    hamburguerMenu.style.opacity = "0"
    resetMenuHamburguerStyles(false);
}


// Global variables
const hamburguerMenu = document.getElementById("hamburguer-menu")
const menuHamburguerArea = document.getElementById("hamburguer-menu-area")
const hamburguerMenuDepartments = document.getElementById("hamburguer-menu-departments")
const hamburguerMenuCategoriesTitle = document.getElementById("hamburguer-menu-categories-title")
const hamburguerMenuCategories = document.getElementById("hamburguer-menu-categories")

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
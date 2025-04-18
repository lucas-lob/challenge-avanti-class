// Minimize footer menu items
function minimizeFooterMenu() {
    for (let i = 0; i < footerMenuItems.length; i++) {
        footerMenuItemList[i].classList.remove("footer-menu-showed")
        footerMenuItemIcon[i].classList.remove("footer-menu-icon-rotate")
        
    }
}

// Global variables
const footerMenuItems = document.querySelectorAll("footer div.footer-menu-item")
const footerMenuItemList = document.querySelectorAll("footer nav ul")
const footerMenuItemIcon = document.querySelectorAll("footer nav img")
let footerMenuItemExpanded = false

// Adds click function for all menu items
for (let i = 0; i < footerMenuItems.length; i++) {
    footerMenuItems[i].addEventListener("click", (element) => {

        // Only mobile version
        if (window.matchMedia("(max-width:760px)").matches) {

            // Check if expanded menu has been clicked twice in a row
            if (element.currentTarget.parentNode.children[1].classList.contains("footer-menu-showed")) {
                element.currentTarget.parentNode.children[1].classList.remove("footer-menu-showed")
                element.currentTarget.children[1].classList.remove("footer-menu-icon-rotate")
            } else {
                minimizeFooterMenu()

                element.currentTarget.children[1].classList.add("footer-menu-icon-rotate")
                element.currentTarget.parentNode.children[1].classList.add("footer-menu-showed")
            }
            
        }
    })
}
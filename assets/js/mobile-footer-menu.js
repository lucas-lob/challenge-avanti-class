// Minimize footer menu items
function minimizeFooterMenu() {
    for (let i = 0; i < footerMenuItemList.length; i++) {
        footerMenuItemList[i].classList.remove("footer-menu-showed")
    }
}

// Global variables
const footerMenuItems = document.querySelectorAll("footer div.footer-menu-item")
const footerMenuItemList = document.querySelectorAll("footer nav ul")
let footerMenuItemExpanded = false

// Adds click function for all menu items
for (let i = 0; i < footerMenuItems.length; i++) {
    footerMenuItems[i].addEventListener("click", (element) => {

        // Only mobile version
        if (window.matchMedia("(max-width:760px)").matches) {

            // Check if expanded menu has been clicked twice in a row
            if (element.currentTarget.parentNode.children[1].classList.contains("footer-menu-showed")) {
                element.currentTarget.parentNode.children[1].classList.remove("footer-menu-showed")
            } else {
                minimizeFooterMenu()
                element.currentTarget.parentNode.children[1].classList.add("footer-menu-showed")
            }
            
        }
    })
}
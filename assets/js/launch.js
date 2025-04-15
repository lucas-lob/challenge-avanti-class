// Object contained all launch infos
// Atenttion: all urls are from index.html
// Atenttion: all values must be string
const launch = {
    desktopLaunch: [
        {
            imgSrc: "assets/images/body/launch.png",
            linkUrl: "/pages/site-in-construction.html",
            description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
            originalPrice: "R$ 100,00",
            descountedPrice: "R$79,90",
            off: "10%",
            maxInstallments: "10x de R$ 7,90"
        },
        {
            imgSrc: "assets/images/body/launch.png",
            linkUrl: "/pages/site-in-construction.html",
            description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
            originalPrice: "R$ 100,00",
            descountedPrice: "R$79,90",
            off: "10%",
            maxInstallments: "10x de R$ 7,90"
        },
        {
            imgSrc: "assets/images/body/launch.png",
            linkUrl: "/pages/site-in-construction.html",
            description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
            originalPrice: "R$ 100,00",
            descountedPrice: "R$79,90",
            off: "10%",
            maxInstallments: "10x de R$ 7,90"
        },
        {
            imgSrc: "assets/images/body/launch.png",
            linkUrl: "/pages/site-in-construction.html",
            description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
            originalPrice: "R$ 100,00",
            descountedPrice: "R$79,90",
            off: "10%",
            maxInstallments: "10x de R$ 7,90"
        },
        {
            imgSrc: "assets/images/body/launch.png",
            linkUrl: "/pages/site-in-construction.html",
            description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
            originalPrice: "R$ 100,00",
            descountedPrice: "R$79,90",
            off: "10%",
            maxInstallments: "10x de R$ 7,90"
        }
    ],
    mobileLaunch: [
        {
            imgSrc: "assets/images/body/launch.png",
            linkUrl: "/pages/site-in-construction.html",
            description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
            originalPrice: "R$ 100,00",
            descountedPrice: "R$79,90",
            off: "10%",
            maxInstallments: "10x de R$ 7,90"
        },
        {
            imgSrc: "assets/images/body/launch.png",
            linkUrl: "/pages/site-in-construction.html",
            description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
            originalPrice: "R$ 100,00",
            descountedPrice: "R$79,90",
            off: "10%",
            maxInstallments: "10x de R$ 7,90"
        },
    ]
}

// Updates launch infos according to screen resolution
function updateLaunch() {
    launchCarousel.innerHTML = ""
    if (window.innerWidth < 760) {
        launch.mobileLaunch.map((launch) => {
            launchCarousel.innerHTML += 
            `
                            <li>
                                <div class="display-flex-column launch-nav-internal-spacing">
            
                                    <div class="display-flex justify-content-center">
                                        <a href="${launch.linkUrl}">
                                            <img src="${launch.imgSrc}" alt="launch" title="Ver lançamento">
                                        </a>
                                    </div>
            
                                    <div class="display-flex-column launch-nav-internal-small-spacing">
                                        <h3 class="grayFont">${launch.description}</h3>
            
                                        <div class="display-flex">
                                            <div>
                                                <p class="font12 grayFont"><s>${launch.originalPrice}</s></p>
                                                <p class="font16"><b>${launch.descountedPrice}</b></p>
                                            </div>
            
                                            <div class="display-flex-column justify-content-center">
                                                <h4>${launch.off} OFF</h4>
                                            </div>
                                        </div>
            
                                        <p class="font12 grayFont">Ou em até <b>${launch.maxInstallments}</b></p>
                                    </div>
            
                                    <div class="display-flex justify-content-center">
                                        <input class="launch-nav-input-submit" type="button" title="Comprar" value="Comprar">
                                    </div>
            
                                </div>
                            </li>
            `
        })
    } else {
        launch.desktopLaunch.map((launch) => {
            launchCarousel.innerHTML += 
            `
                            <li>
                                <div class="display-flex-column launch-nav-internal-spacing">
            
                                    <div class="display-flex justify-content-center">
                                        <a href="${launch.linkUrl}">
                                            <img src="${launch.imgSrc}" alt="launch" title="Ver lançamento">
                                        </a>
                                    </div>
            
                                    <div class="display-flex-column launch-nav-internal-small-spacing">
                                        <h3 class="grayFont">${launch.description}</h3>
            
                                        <div class="display-flex">
                                            <div>
                                                <p class="font12 grayFont"><s>${launch.originalPrice}</s></p>
                                                <p class="font16"><b>${launch.descountedPrice}</b></p>
                                            </div>
            
                                            <div class="display-flex-column justify-content-center">
                                                <h4>${launch.off} OFF</h4>
                                            </div>
                                        </div>
            
                                        <p class="font12 grayFont">Ou em até <b>${launch.maxInstallments}</b></p>
                                    </div>
            
                                    <div class="display-flex justify-content-center">
                                        <input class="launch-nav-input-submit" type="button" title="Comprar" value="Comprar">
                                    </div>
            
                                </div>
                            </li>
            `
        })
    }    
}

// Global variables
const launchCarousel = document.querySelector("main nav ul")

// Creates the launch carousel
updateLaunch()

// Verifies new screen resolution
verifiesScreenTimeout = 0
window.onresize = function(){
    clearInterval(verifiesScreenTimeout)

    verifiesScreenTimeout = setTimeout(updateLaunch, 250);
}




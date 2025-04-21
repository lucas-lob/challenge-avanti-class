// Array contained all launch infos
// Atenttion: all urls are from index.html
// Atenttion: all values must be string
const cardsInfos = [
    {
        imgSrc: "assets/images/body/launch.png",
        linkUrl: "/pages/site-in-construction.html",
        description: " 9 Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        originalPrice: "R$ 100,00",
        descountedPrice: "R$79,90",
        off: "10%",
        maxInstallments: "10x de R$ 7,90"
    },
    {
        imgSrc: "assets/images/body/launch.png",
        linkUrl: "/pages/site-in-construction.html",
        description: " 8 Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        originalPrice: "R$ 100,00",
        descountedPrice: "R$79,90",
        off: "10%",
        maxInstallments: "10x de R$ 7,90"
    },
    {
        imgSrc: "assets/images/body/launch.png",
        linkUrl: "/pages/site-in-construction.html",
        description: " 7 Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        originalPrice: "R$ 100,00",
        descountedPrice: "R$79,90",
        off: "10%",
        maxInstallments: "10x de R$ 7,90"
    },
    {
        imgSrc: "assets/images/body/launch.png",
        linkUrl: "/pages/site-in-construction.html",
        description: " 6 Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        originalPrice: "R$ 100,00",
        descountedPrice: "R$79,90",
        off: "10%",
        maxInstallments: "10x de R$ 7,90"
    },
    {
        imgSrc: "assets/images/body/launch.png",
        linkUrl: "/pages/site-in-construction.html",
        description: "5 Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        originalPrice: "R$ 100,00",
        descountedPrice: "R$79,90",
        off: "10%",
        maxInstallments: "10x de R$ 7,90"
    },
    {
        imgSrc: "assets/images/body/launch.png",
        linkUrl: "/pages/site-in-construction.html",
        description: " 5 Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        originalPrice: "R$ 100,00",
        descountedPrice: "R$79,90",
        off: "10%",
        maxInstallments: "10x de R$ 7,90"
    },
    {
        imgSrc: "assets/images/body/launch.png",
        linkUrl: "/pages/site-in-construction.html",
        description: " 4 Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        originalPrice: "R$ 100,00",
        descountedPrice: "R$79,90",
        off: "10%",
        maxInstallments: "10x de R$ 7,90"
    },
    {
        imgSrc: "assets/images/body/launch.png",
        linkUrl: "/pages/site-in-construction.html",
        description: " 3 Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        originalPrice: "R$ 100,00",
        descountedPrice: "R$79,90",
        off: "10%",
        maxInstallments: "10x de R$ 7,90"
    },
    {
        imgSrc: "assets/images/body/launch.png",
        linkUrl: "/pages/site-in-construction.html",
        description: "2 Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        originalPrice: "R$ 100,00",
        descountedPrice: "R$79,90",
        off: "10%",
        maxInstallments: "10x de R$ 7,90"
    },
    {
        imgSrc: "assets/images/body/launch.png",
        linkUrl: "/pages/site-in-construction.html",
        description: " 1 Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        originalPrice: "R$ 100,00",
        descountedPrice: "R$79,90",
        off: "10%",
        maxInstallments: "10x de R$ 7,90"
    }
]



// Settings of the cards
const cardsSettings = {
    divCardsID: "top-slider-cards",
    cardsClass: "top-slider-card",
}



// Creates the card
const div = document.getElementById(cardsSettings.divCardsID)

div.innerHTML = ""

cardsInfos.map((card) => {
    div.innerHTML +=
        `
                        <div class=${cardsSettings.cardsClass}>
                            <div class="display-flex-column launch-nav-internal-spacing">
        
                                <div class="display-flex justify-content-center">
                                    <a href="${card.linkUrl}">
                                        <p>NOVO</p>

                                        <img src="${card.imgSrc}" alt="launch" title="Ver lançamento">
                                    </a>
                                </div>
        
                                <div class="display-flex-column launch-nav-internal-small-spacing">
                                    <h3 class="grayFont">${card.description}</h3>
        
                                    <div class="display-flex">
                                        <div>
                                            <p class="font12 grayFont"><s>${card.originalPrice}</s></p>
                                            <p class="font16"><b>${card.descountedPrice}</b></p>
                                        </div>
        
                                        <div class="display-flex-column justify-content-center">
                                            <h4>${card.off} OFF</h4>
                                        </div>
                                    </div>
        
                                    <p class="font12 grayFont">Ou em até <b>${card.maxInstallments}</b></p>
                                </div>
        
                                <div class="display-flex justify-content-center">
                                    <input class="launch-nav-input-submit" type="button" title="Comprar" value="Comprar">
                                </div>
        
                            </div>
                        </${cardsSettings.divCardsID}>
        `
})





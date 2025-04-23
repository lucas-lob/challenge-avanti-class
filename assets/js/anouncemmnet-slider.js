{
    sliderSettings = {
        sliderID: "anouncemment-slider",
        bottomCirclesID: "anouncemment-slider-bottom-circles"
    }


    // Global variables
    const sliderDiv = document.getElementById(sliderSettings.sliderID)
    const bottomCirclesDiv = document.getElementById(sliderSettings.bottomCirclesID)



    // Creates bottom circles
    bottomCirclesDiv.innerHTML =
        `
                    <span class="material-icons anouncemment-slide-selected">circle</span>
                    <span class="material-icons">circle</span>
                    <span class="material-icons">circle</span>

        `


    // Adds event listener for update the bottom circles
    sliderDiv.addEventListener("touchend", () => {
        let screenSize = window.innerWidth

        setTimeout(() => {
            for (let i = 0; i < sliderDiv.childElementCount; i++) {
                let slidePosition = sliderDiv.children[i].getBoundingClientRect().x

                if (slidePosition >= -100 && slidePosition <= 200) {
                    for(let k = 0; k < bottomCirclesDiv.childElementCount; k++){
                        if(k === i){
                            bottomCirclesDiv.children[k].classList.add("anouncemment-slide-selected")
                        } else {
                            bottomCirclesDiv.children[k].classList.remove("anouncemment-slide-selected")
                        }
                    }
                }
            }
        }, 500)
    })
}
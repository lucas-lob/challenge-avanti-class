{
    //
    // Global variables
    let isMobile = false
    const mobileScreen = 760
    const banner1 = document.getElementById("banner-content-1")
    const banner2 = document.getElementById("banner-content-2")
    let screenResizeTimeout = 0



    // First render
    if (window.innerWidth <= mobileScreen) {
        isMobile = true

        banner1.innerHTML =
            `
        <p>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

        <p>Cras dignissim est et pellentesque tincidunt. Praesent bibendum quis velit a aliquam. Ut vestibulum turpis eget mi iaculis ullamcorper. Curabitur nec metus sed tortor sollicitudin porta nec eu enim. Ut fermentum scelerisque tortor mollis volutpat. Mauris iaculis magna nisl, vel porttitor augue placerat et.</p>
            `

        banner2.innerHTML =
            `
        <p>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

        <p>Cras dignissim est et pellentesque tincidunt. Praesent bibendum quis velit a aliquam. Ut vestibulum turpis eget mi iaculis ullamcorper. Curabitur nec metus sed tortor sollicitudin porta nec eu enim. Ut fermentum scelerisque tortor mollis volutpat. Mauris iaculis magna nisl, vel porttitor augue placerat et.</p>
            `
    } else {
        isMobile = false

        banner1.innerHTML =
            `
        <p>Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus
        ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed
        lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor
        eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce
        sagittis elit a libero commodo egestas efficitur id augue.</p>

        <p>Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus
        ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed
        lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor
        eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce
        sagittis elit a libero commodo egestas efficitur id augue.</p>
    `

        banner2.innerHTML =
            `
        <p>Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus
        ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed
        lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor
        eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce
        sagittis elit a libero commodo egestas efficitur id augue.</p>

        <p>Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus
        ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed
        lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor
        eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce
        sagittis elit a libero commodo egestas efficitur id augue.</p>
`
    }



    // When resizing screen
    window.addEventListener("resize", () => {
        clearTimeout(screenResizeTimeout)

        screenResizeTimeout = setTimeout(() => {
            if (window.innerWidth <= mobileScreen && !isMobile) {
                isMobile = true

                banner1.innerHTML =
                    `
                <p>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

                <p>Cras dignissim est et pellentesque tincidunt. Praesent bibendum quis velit a aliquam. Ut vestibulum turpis eget mi iaculis ullamcorper. Curabitur nec metus sed tortor sollicitudin porta nec eu enim. Ut fermentum scelerisque tortor mollis volutpat. Mauris iaculis magna nisl, vel porttitor augue placerat et.</p>
                    `

                banner2.innerHTML =
                    `
                <p>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

                <p>Cras dignissim est et pellentesque tincidunt. Praesent bibendum quis velit a aliquam. Ut vestibulum turpis eget mi iaculis ullamcorper. Curabitur nec metus sed tortor sollicitudin porta nec eu enim. Ut fermentum scelerisque tortor mollis volutpat. Mauris iaculis magna nisl, vel porttitor augue placerat et.</p>
                    `
            } else if (window.innerWidth > mobileScreen && isMobile) {
                isMobile = false

                banner1.innerHTML =

                    `
                <p>Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus
                ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed
                lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor
                eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce
                sagittis elit a libero commodo egestas efficitur id augue.</p>

                <p>Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus
                ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed
                lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor
                eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce
                sagittis elit a libero commodo egestas efficitur id augue.</p>
            `

                banner2.innerHTML =

                    `
                <p>Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus
                ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed
                lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor
                eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce
                sagittis elit a libero commodo egestas efficitur id augue.</p>

                <p>Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus
                ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed
                lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor
                eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce
                sagittis elit a libero commodo egestas efficitur id augue.</p>
    `
            }
        }, 400)
    })
}
window.onload = function () {
    // Define the images and text content for the slider
    const images = [
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1367272/pexels-photo-1367272.jpeg?cs=srgb&dl=pexels-rebrand-cities-1367272.jpg&fm=jpg"
    ];
    const texts = [
        "Bringing small businesses to your doorstep",
        "Empowering homemakers",
        "Encouraging creativity"
    ];

    // Slider element and text element
    const sliderElement = document.querySelector(".slider");
    const brightTextElement = document.querySelector(".bright-text");

    // Check if both elements exist
    if (sliderElement && brightTextElement) {
        let currentIndex = 0; // Start with the first image and text

        // Function to update the slider background and text
        const updateSlider = () => {
            sliderElement.style.backgroundImage = `url('${images[currentIndex]}')`;
            brightTextElement.innerHTML = `<p class='bright-text'>${texts[currentIndex]}</p>`;
            // Update index for the next slide, looping back to the beginning
            currentIndex = (currentIndex + 1) % images.length;
        };

        // Initial call to set the first image and text
        updateSlider();

        // Set interval to update every 4 seconds
        setInterval(updateSlider, 4000);
    }

    // Title animation functionality
    const titlefunc = () => {
        const title = document.getElementsByClassName("character")[0];
        if (title) {
            title.classList.toggle("jumpanimation");
            setTimeout(() => {
                title.classList.remove("jumpanimation");
            }, 4000);
        }
    };

    const characterelement = document.getElementsByClassName("character")[0];
    if (characterelement) {
        characterelement.addEventListener("click", titlefunc);
    }
};

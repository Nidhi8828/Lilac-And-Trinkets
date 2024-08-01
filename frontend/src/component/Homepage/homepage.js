window.onload = function() {
    // Check if ".slider" element exists before accessing its properties
    const sliderElement = document.querySelector(".slider");
    if (sliderElement) {
        setInterval(() => {
            sliderElement.style.backgroundImage = "url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
            const brightTextElement = document.querySelector(".bright-text");
            if (brightTextElement) {
                brightTextElement.innerHTML = "<p class='bright-text'>Bringing small businesses to your doorstep</p>";
            }
        }, 4000);
    }

    // Check if ".bright-text" element exists before accessing its properties
    const brightTextElement = document.querySelector(".bright-text");
    if (brightTextElement) {
        setInterval(() => {
            const sliderElement = document.querySelector(".slider");
            if (sliderElement) {
                sliderElement.style.backgroundImage = "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
            }
            brightTextElement.innerHTML = "<p class='bright-text'>Empowering homemakers </p>";
        }, 8000);

        setInterval(() => {
            const sliderElement = document.querySelector(".slider");
            if (sliderElement) {
                sliderElement.style.backgroundImage = "url('https://images.pexels.com/photos/1367272/pexels-photo-1367272.jpeg?cs=srgb&dl=pexels-rebrand-cities-1367272.jpg&fm=jpg')";
            }
            brightTextElement.innerHTML = "<p class='bright-text'>Encouraging creativity</p>";
        }, 12000);
    }
}

// const titlefunc = ()=>{
//     let title =  document.getElementsByClassName("character")[0];
//     title.classList.toggle("jumpanimation"); 
 
//     setTimeout(()=>{
//      title.classList.remove("jumpanimation")
//     }, 4000)
//  }
 
//  const characterelement = document.getElementsByClassName("character")[0]
//  if(characterelement)
//  {
//      characterelement.addEventListener("click", titlefunc);
//  }
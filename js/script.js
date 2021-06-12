{
  const welcome = () => {
    console.log("Hola a todos los desarrolladores, que visitan aquí 🔒")
  };
  
  const toggleBackground = () => {
    const container = document.querySelector(".container")
    const nextColorName = document.querySelector(".js-nextColorName");
    const imageColor = document.querySelector(".imageColor");
    const nameColor = document.querySelector(".nameColor");
    const underlineColor = document.querySelector(".underlineColor");

    container.classList.toggle("whiteBackground");
    nextColorName.innerText = container.classList.contains("whiteBackground") ? "verde claro" : "blanco";
    imageColor.classList.toggle("lightSeaGreenColorImage");
    nameColor.classList.toggle("lightSkyBlueColorName");
    underlineColor.classList.toggle("lightSeaGreenColorUnderline"); 

  };
  
  const init = () => {
    const changeBackground = document.querySelector(".js-changeBackground");
    changeBackground.addEventListener("click", toggleBackground);
    
    welcome();
 };

 init();
}
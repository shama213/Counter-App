alert("Hi Welcome to the Counter App")

const body = document.getElementById("body")

const themeDropdown = document.getElementById("change-theme")

const resetButton = document.getElementById("reset-button")


const incrementButton = document.getElementById("increment-button")

const decermentButton = document.getElementById("decerment-button")

const counterElement = document.getElementById("counter-value")



let counterValue = 0;

function updateCounter(){
    counterElement.textContent = counterValue
}

function incrementCounter (){
    counterValue++;
    updateCounter();
}

function decermentCounter(){
    counterValue--;

    updateCounter()
}
function resetCounter(){
    counterValue = 0;
    updateCounter()
}

incrementButton.addEventListener("click",incrementCounter);
decermentButton.addEventListener("click",decermentCounter)
resetButton.addEventListener("click", resetCounter)

document.addEventListener("keydown", function (event){
   switch(event.key){
    case"ArrowUp":
        incrementCounter();
        break;
    case "ArrowDown":
        decermentCounter()
        break;
   }
})

const themes = {
    light:{
        text:"black",
        background:"white",
    },
    dark:{
        text:"white",
        background:"black",
    },
    pink:{
        text:"black",
        background:"pink",
    },

};

themeDropdown.addEventListener("change", (e)=> {
    const themeChoice = e.target.value

    body.style.backgroundColor = themes[themeChoice].background
    body.style.color = themes[themeChoice].text
})
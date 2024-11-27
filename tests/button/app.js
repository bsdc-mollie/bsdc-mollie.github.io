console.log("button")

const buttons = document.getElementById('button');
console.log(buttons);


functionOne = function (){
    console.log("function one running")
    const bodyOne = document.querySelector("body");
    if(bodyOne.className === "red") {
        
    }else {
        bodyOne.className = "red";
    }
    
}

function randomColor() {
    return '#'+ ('000000' + (Math.random()*0xFFFFFF<<0).toString(16)).slice(-6)
}

function setColor(){
    if(bodyOne.className === "blue") {
        bodyOne.className = "myDIV";
    }else {
        bodyOne.className = "myDiv";
    }
    
}
setColor();
buttons.addEventListener("click", setColor); /* waits for thing - runs function */

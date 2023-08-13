// let bodyColors = [
//   "#a8d530",
//   "#42aaff",
//   "#f3d55b",
//   "#ff4f51",
//   "#904ae8",
//   "#ffa711",
// ];

// color of characters : 
let charactersColor = document.getElementById("color-btn");
charactersColor.addEventListener("click",changecolor);

function changecolor(){
   let colorName = prompt("What color do you want to change?");
   document.documentElement.style.setProperty('--color-character', colorName);
}


// Chane Face :

let faceBtn = document.getElementById("face-btn");

faceBtn.addEventListener("click", changeFace);

let counter = 1;
let faceType = document.getElementById("face");
let faceText = document.getElementById("faceText");

function changeFace() {
    if (counter == 1) { faceType.src = "./img/face-1.png" , faceText.innerText = "Happy" }
    else if (counter == 2) { faceType.src = "./img/face-2.png" , faceText.innerText = "Tired"}
    else if (counter == 3) { faceType.src = "./img/face-3.png" , faceText.innerText = "Surprised"}
    else if (counter == 4) { faceType.src = "./img/face-4.png" , faceText.innerText = "Sad"}
    else if (counter == 5) { faceType.src = "./img/face-5.png" , faceText.innerText = "Angry"}
    else if (counter == 6) { faceType.src = "./img/face-6.png" , faceText.innerText = "Confused"}
    if(counter ==  6) {
        faceType.src = "./img/face-0.png"
        counter = 0;
        return;
    }
    counter++;
}



// Them : 
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("body");
let btnColor = document.querySelectorAll(".btn-backgrounds");

function setGradient() {
    body.style.background = color1.value;
    btnColor.forEach(items => {
        items.style.background = color1.value;
    })

}


color1.addEventListener("input", setGradient);


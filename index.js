const buttonsG = document.querySelectorAll(".drum");


for (let i = 0; i < buttonsG.length; i++) {
  const g = buttonsG
  g[i].addEventListener("click", buttonClick);


}



function buttonClick() {
  switch (this.innerHTML) {
    case "w":
      let audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      let bam = new Audio("sounds/kick-bass.mp3");
      bam.play();
      break;
    case "s":
      let gta = new Audio("sounds/snare.mp3");
      gta.play();
      break;
    case "d":
      let goat = new Audio("sounds/tom-1.mp3");
      goat.play();
      break;
    case "j":
      let bron = new Audio("sounds/tom-2.mp3");
      bron.play();
      break;
    case "k":
      let fam = new Audio("sounds/tom-3.mp3");
      fam.play();
      break;
    case "l":
      let cup = new Audio("sounds/tom-4.mp3");
      cup.play();
      break;
    case "j":
      let fun = new Audio("sounds/aaahh.mp3");
      fun.play();
      break;
  }
  buttonAnimation(this.innerHTML);
}

document.addEventListener('keydown', teju);


function teju(event) {
  switch (event.key) {
    case "w":
      let audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      let bam = new Audio("sounds/kick-bass.mp3");
      bam.play();
      break;
    case "s":
      let gta = new Audio("sounds/snare.mp3");
      gta.play();
      break;
    case "d":
      let goat = new Audio("sounds/tom-1.mp3");
      goat.play();
      break;
    case "j":
      let bron = new Audio("sounds/tom-2.mp3");
      bron.play();
      break;
    case "k":
      let fam = new Audio("sounds/tom-3.mp3");
      fam.play();
      break;
    case "l":
      let cup = new Audio("sounds/tom-4.mp3");
      cup.play();
      break;
    case "j":
      let fun = new Audio("sounds/aaahh.mp3");
      fun.play();
      break;
  }
  buttonAnimation(event.key);
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed")
  },100);
}


// Getting uplayer names
p1 = prompt('Enter Player 1 name');
p2 = prompt('Enter Player 2 name');

// Displaying plaer names
document.querySelectorAll(".dice p")[0].textContent = p1;
document.querySelectorAll(".dice p")[1].textContent = p2;

// Generating the dice outcomes
var d1 = 1 + Math.floor(Math.random()*6);
var d2 = 1 + Math.floor(Math.random()*6);

document.querySelector("img.img1").setAttribute("src", "images/dice" + d1 + ".png");
document.querySelector("img.img2").setAttribute("src", "images/dice" + d2 + ".png");

if (d1 > d2) {
  document.querySelector(".container h1").innerHTML = "<img class='winner' src='images/winner.png'>" + p1 + " wins"
} else if(d2 > d1) {
  document.querySelector(".container h1").innerHTML = "<img class='winner' src='images/winner.png'>" + p2 + " wins"
} else {
  document.querySelector(".container h1").innerHTML = "Draw!"
}

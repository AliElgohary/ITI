//3-

let counter = 0;

function increaseCounter() {
  counter++;
}

function alertScore() {
  alert("Score is: " + counter);
}

function gameOver() {
  counter = 0;
  alert("Game Over");
}

document.getElementById("image1").addEventListener("click", increaseCounter);
document.getElementById("image2").addEventListener("click", increaseCounter);
document.getElementById("image3").addEventListener("click", increaseCounter);

document.addEventListener("click", alertScore);

setTimeout(function () {
  document.removeEventListener('click', alertScore);
  document.addEventListener('click', gameOver);
}, 5000);

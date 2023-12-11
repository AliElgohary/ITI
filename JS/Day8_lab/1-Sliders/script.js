var httpClient = new XMLHttpRequest();
httpClient.open(
  "GET",
  "https://jsonplaceholder.typicode.com/albums/1/photos",
  true
);
httpClient.send();

var div = document.getElementById("content");
var counter = 0;
var data;
var intFuncion;

httpClient.onreadystatechange = function () {
  if (httpClient.readyState == 4 && httpClient.status == 200) {
    data = JSON.parse(httpClient.responseText);
  }
};

function start(counter) {
    if (httpClient.readyState == 4 && httpClient.status == 200) {
      var imageUrl = data[counter].url;
      div.innerHTML = "";
      var image = document.createElement("img");
      image.src = imageUrl;
      div.appendChild(image);
    }
  }
  

document.getElementById("start").addEventListener("click", function () {
  intFuncion = setInterval(function () {
    start(counter);
    if (counter < data.length - 1) {
      counter++;
    } else {
      counter = 0;
    }
  }, 500);
});

function stop(){
    clearInterval(intFuncion);
}

function prevImage() {
  if (counter > 0) {
    counter = counter - 1;
  } else {
    counter = data.length - 1;
  }
  start(counter);
}
function nextImage() {
    if (counter < data.length - 1) {
      counter++;
    } else {
      counter = 0;
    }
    start(counter);
  }
  


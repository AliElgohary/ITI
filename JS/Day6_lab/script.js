// 1 - alert the code of key pressed on a textbox, and which mouse button clicked on it.

document.getElementById("textArea").addEventListener("keydown", function (e) {
  alert(e.key);
});
document.getElementById("textArea").addEventListener("click", function (e) {
  if (e.button == 0) {
    alert("its right click");
  } else {
    alert(e.button);
  }
});

// 2-
document.getElementById("startClock").addEventListener("click", function () {
  alert("clock started");
  updateClock();
  clockInterval = setInterval(updateClock, 1000);
});

function updateClock() {
  let date = new Date();
  localDate = date.toLocaleTimeString("it-IT");
  document.getElementById("clockSpan").innerHTML = `${localDate}`;
  return localDate;
}

function stopClock() {
  clearInterval(clockInterval);
  alert("clock stopped");
}

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "w" && e.altKey) {
    stopClock();
  }
});

// 3- is done in external folder called clicksCounter

// 4-  is done in external folder called loginFormC

// 5- Open and close ads window
let newWindow;
function openAds() {
  setTimeout(function () {
      newWindow = window.open("", "_blank", "width=600,height=400");
      newWindow.document.write(
          "<p>This is an advertisement. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"
      );
  }, 3000);
}

function closeAds() {
  newWindow.close();
}

// 6- also done in external folder called loginForm
// 7- also done in external folder called loginForm
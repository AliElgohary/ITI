// 6- auto scrolling every half seconds
function checktermsCondition() {
  let termsWindow = window.open("terms.html");

  if (termsWindow) {
    let scrollInterval = setInterval(function () {
      termsWindow.scrollBy(0, 100);
    }, 500);
  }
}

// 7- check Name
document.getElementById('userName').addEventListener('keydown', function (e) {
  if(/[0-9]/.test(e.key)){
    e.preventDefault();
  }
})
// 1-
console.log('Running')
function reverseArray(...args) {
    let reversed = [...args].reverse();
    return reversed
}
function secondWay(){
    let array = [...arguments]
    return array.reverse();
}
console.log(secondWay(6,2,3,4,5))

// 2- 
function checkingParams(param1, param2){
    if(arguments.length > 2){
        throw new Error('param1 must be 2 or less ' + arguments.length);
    }
    else {
        return true;
    }
}
console.log(checkingParams(2,2))
// console.log(checkingParams(2,2,5))

// 3- 
function addNumbers(...args) {
    let numbers = [...args];
    let result = 0;
    for (let i = 0; i < numbers.length; i++){
        if (typeof numbers[i] !== 'number'){
            return 'all params must be a number'
        }
        else {
            result += numbers[i]
        }
    }
    return result;
}
console.log(addNumbers(2,2,5, 'Ali'))
console.log(addNumbers(2,2,5))

// 4- 

function setCookie(user, value) {
    document.cookie = `${user}=${value}`;
  }
  function getCookieArray() {
    const cookies = document.cookie.split(";");
    cookies.forEach((cookie) => {
      const [name, value] = cookie.trim().split("=");
      console.log(name, value);
    });
  }
  
  function getCookieValue() {
    let userCookie = document.cookie
      .split(";")
      .find((c) => c.includes("user"));
    userName = userCookie.split("=")[0];
    let value = userCookie.split("=")[1];
    console.log("user name is", value);
    return value;
  }
try {    
    setCookie(x);
    getCookieValue();
} catch (error) {
    console.log(error.message);
}

// 5- 
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.calculateArea = function() {
    return this.width * this.height;
};

Rectangle.prototype.displayInfo = function() {
    const area = this.calculateArea();
    console.log(`Rectangle - Width: ${this.width}, Height: ${this.height}, Area: ${area}`);
};

var myRectangle = new Rectangle(5, 10);
myRectangle.displayInfo();

  
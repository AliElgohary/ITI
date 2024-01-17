// 1-
let getAgeWithDays = function (age) {
  return age * 356;
};
console.log(getAgeWithDays(10));



// 2-
let getTheSmallest = function (arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
    }
  }
  return smallest;
};
console.log(getTheSmallest([1, 2, 0, 4, 5, 9]));



// 3-
let descendingOrder = function (arr) {
  const newArr = arr.sort((a, b) => b - a);
  return (result = parseInt(newArr.join("")));
};
console.log(descendingOrder([3, 4, 1, 5]));



// 4-
let calculateAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let average = sum / arr.length;
  return average;
};
console.log(calculateAverage([1, 2, 3, 5, 7]));



//5-
// what is the output of Console.log( [ ] == [ ] ) Console.log( { } == { } ) And explain your answer
// it will be false for both because they will be new objects/Array that doesn't share the same reference


//6-
//  what is the output of this code with explanation
function main() {
  console.log("A");
  setTimeout(function print() {
    console.log("B");
  }, 0);
  console.log("C");
}
main();
// the Output will be A C B since the print function that print B has a setTimeOut it will be pushed to the event loop
// and will be called after the stack is cleared



// 7-
// what is the output of this code with explanation
var num = 8;
var num = 10;
console.log(num);
// it will be 10 since var don't enforce the block-level scope



// 8-
// what is the output of this code with explanation
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Ayush";
  let age = 21;
}
sayHi();
// it will be error because you cannot use age before declaration

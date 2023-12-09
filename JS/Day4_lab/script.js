"use strict";

// 1-
// alert("Welcome to my site!");
// let name = prompt("please enter your name");
// document.write("welcome " + name);

// 2-
document.getElementById("sumButtom").addEventListener("click", function () {
  let num1 = prompt("Please enter the first value");
  let num2 = prompt("Please enter the second value");
  let result = sum(num1, num2);
  return console.log("the sum is = " + result);
});

// 3-
function getTemp(temp) {
  let current = temp > 30 ? "Hot" : "Cold";
  return current;
}
console.log(getTemp(22));
console.log(getTemp(35));

// 4-
// yes, we can use ernary conditional operator because it allows more than two different conditions
// but it makes the code less readable
function getTempAndActualFeels(temp, feels) {
  let current =
    temp > 30 && feels > 30
      ? "Hot"
      : (temp >= 25 && temp <= 30) || (feels >= 25 && feels <= 30)
      ? "Normal"
      : "Cold";
  return current;
}
console.log(getTempAndActualFeels(40, 40));
console.log(getTempAndActualFeels(22, 23));

// yes we can also use switch case because involve condition the you want to switch between
function temperatureStatusSwitch(temperature, actualFeel) {
  let status;

  switch (true) {
    case temperature >= 25 &&
      temperature <= 30 &&
      actualFeel >= 25 &&
      actualFeel <= 30:
      status = "Normal";
      break;
    case temperature < 25 && actualFeel < 25:
      status = "Cold";
      break;
    case temperature > 30 && actualFeel > 30:
      status = "Hot";
      break;
    default:
      status = "can not detect";
  }

  console.log(status);
}
temperatureStatusSwitch(23, 30)

// 5-
function eligibleTracks(faculty) {
  let message = "";
  switch (faculty) {
    case "FCI":
      message = "you are eligible to programming tracks";
      break;
    case "Engineering":
      message = "you are eligible to network and embadded tracks";
      break;
    case "Commerce":
      message = "you are eligible to ERP and media tracks";
      break;
    default:
      message = "you are  eligible to fundementals track";
  }
  return message;
}
console.log(eligibleTracks("FCI"));
console.log(eligibleTracks("Commerce"));
console.log(eligibleTracks("Other"));

// 6- get the odd number between two numbers
function getOddNumbers(start, finish) {
  for (var i = start; i < finish; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}
getOddNumbers(2, 10);

// 7- get the evaluation of an expression
document
  .getElementById("expressionButton")
  .addEventListener("click", function () {
    let expression = prompt(
      "Please enter a mathmatical expression ex: 3+1*2/3"
    );
    console.log(
      "you entered " + expression + " and the result is = " + eval(expression)
    );
  });


// 8- get the Name, Age and date of birth
function isValidName(name) {
    let regName = /^[a-zA-Z]{3,}$/;
    return regName.test(name);
}

function isValidAge(age) {
    let regAge = /^[1-9][0-9]{3}$/;
    return regAge.test(age);
}

function getValidName() {
    let name;

    do {
        name = prompt('Please enter your name (at least 3 characters):');
    } while (!isValidName(name));

    return name;
}

function getValidBirthYear() {
    let birthYear;

    do {
        birthYear = prompt('Please enter your birth year (a number less than 2010):');
    } while (!isValidAge(birthYear) || birthYear >= 2010);

    return parseInt(birthYear);
}

function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

document.getElementById('contactMeButton').addEventListener("click", function () {
    const validatedName = getValidName();
    const validatedBirthYear = getValidBirthYear();
    const age = calculateAge(validatedBirthYear);

    document.getElementById('profileTable').innerHTML = `
    <table style='border: 1px solid black;'>
    <tr style='border: 1px solid black;' >
        <td style='border: 1px solid black;' >Name:</td>
        <td style='border: 1px solid black;' >${validatedName}</td>
    </tr>
    <tr style='border: 1px solid black;' >
        <td style='border: 1px solid black;' >Birth Year:</td>
        <td style='border: 1px solid black;' >${validatedBirthYear}</td>
    </tr>
    <tr style='border: 1px solid black;' >
        <td style='border: 1px solid black;' >Age:</td>
        <td style='border: 1px solid black;' >${age}</td>
    </tr>
</table>
    `
});



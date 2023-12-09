// 1- JS random tips
let randomTip = [
  "Destructure Arrays with Default Values to Avoid Getting",
  "Use the Spread Operator to Copy and Merge Arrays",
  "Use Arrow Syntax to Write Shorter and More Elegant Functions",
  "Use Destructuring to Extract Properties from Objects",
  "Use the startsWith() and endsWith() String Methods to Get the Start and End of a String",
  "Use the trim(), trimStart(), and trimEnd() to Handle White Spaces",
  "Use replace() with the toUpperCase() and toLowerCase() Methods to Convert Between Cases",
  "Use the Array.from() Method to Create Arrays from Array-like Objects or Iterables",
  "Use the map() Method to Transform all the Elements of an Array",
  "Use the filter() Method to Filter Through Arrays",
];
randomTipNumber = Math.floor(Math.random() * 10);
console.log(randomTipNumber);
alert("JS tip of the Day : " + randomTip[randomTipNumber]);

// 2- make a button that displays the current date and time in local format
document
  .getElementById("timeAndDateButton")
  .addEventListener("click", function () {
    let date = new Date();
    document.getElementById("timeAndDateSpan").innerHTML = `
    date : ' ${date} `;
  });

// 3- check if the email contain @ without regex
function isValidEmail(email) {
  if (
    email.includes("@") &&
    email.indexOf("@") !== 0 &&
    email.lastIndexOf("@") !== email.length - 1
  ) {
    return email;
  } else {
    return false;
  }
}
document.getElementById("validEmail").addEventListener("click", function () {
  email = prompt("Please enter a valid email");
  let result = isValidEmail(email);
  if (!result) {
    console.log("your email is not valid");
  } else {
    console.log("your valid email is : " + email);
  }
});

// 4-get fullname and validate it with regex only
document
  .getElementById("getFullNameAndEmailButton")
  .addEventListener("click", getFullName);

function isFullNameValid(fullname) {
  regExFullnme = /^[a-zA-Z]{4,}( [a-zA-Z]{4,})+$/;
  return regExFullnme.test(fullname);
}

function isEmailValid(email) {
  regEmail =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com\.eg|net\.eg|edu\.eg|org\.eg)$/i;
  return regEmail.test(email);
}

function getFullName() {
  let fullname = prompt("please enter your full name");
  if (!isFullNameValid(fullname)) {
    console.log(fullname + " is an invalid full name. Please try again.");
    getFullName();
  } else {
    getEmail();
  }
}

function getEmail() {
  let email = prompt("Please enter your email");
  if (!isEmailValid(email)) {
    console.log(email + " is an invalid email. Please try again.");
    getEmail();
  } else {
    console.log("both email and full name are valid, thanks you");
  }
}

// 6- Create an array that hold the following students grades : 60, 100,10,15,85
let studentsGrades = [60, 100, 10, 15, 85];
for (let i = 1; i < studentsGrades.length; i++) {
  for (let j = 0; j < studentsGrades.length - i; j++) {
    if (studentsGrades[j] < studentsGrades[j + 1]) {
      let temp = studentsGrades[j];
      studentsGrades[j] = studentsGrades[j + 1];
      studentsGrades[j + 1] = temp;
    }
  }
}
console.log(studentsGrades);
// find the highest grade less than or equal 100
let highestGrade = studentsGrades.find((e) => e <= 100);
console.log(highestGrade);
// grades of all students with grades below 60
let averageGrade = studentsGrades.filter((e) => e < 60);
console.log(averageGrade);

// 7- create an array of objects that holds students names with grades

let students = [
  { name: "Ahmed", grade: 90 },
  { name: "Noor", grade: 30 },
  { name: "Fatima", grade: 85 },
  { name: "Layla", grade: 80 },
  { name: "Mohammed", grade: 50 },
];
// Find student Name, who got a degree between 90 and 100 [Use find()].
let studentsWithHighestGrades = students.find(
  (student) => student.grade >= 90 && student.grade <= 100
);
console.log(
  "Student with a degree between 90 and 100:",
  studentsWithHighestGrades.name
);

// Print students names, who got a degree less than 60 [Use filter()].
let studentsWithLowestGrades = students.filter((student) => student.grade < 60);
console.log("Students who got a degree less than 60:");
studentsWithLowestGrades.forEach((student) => console.log(student.name));

// Add a new student to the array [Use push()].
let newStudent = { name: "Ali", grade: 40 };
students.push(newStudent);
console.log("Students after adding a new student:");
students.forEach((student) => console.log(student));

// Remove the last student of the array [Use pop()] and then use for of to print all elements of the array.
let poppedStudent = students.pop();
console.log("Removed student:", poppedStudent);
console.log("Students after removing the last student:");
for (let student of students) console.log(student);

// Sort the array alphabetically based on the student name.
let sortedStudents = students.sort((a, b) => a.name.localeCompare(b.name));
console.log("Students sorted alphabetically by name:");
for (let student of sortedStudents) console.log(student);

// Use splice() function to add 2 new students after the second element of the array [Bonus].
let newStudents = [
  { name: "Mona", grade: 75 },
  { name: "Khaled", grade: 85 },
];
students.splice(2, 0, ...newStudents);
console.log("Students after adding 2 new students after the second element:");
for (let student of students) console.log(student);

// Use splice() function to remove 1 student after the third element of the array [Bonus].
students.splice(3, 1);
console.log("Students after removing 1 student after the third element:");
for (let student of students) console.log(student);



// 8- Show prompt that ask user to enter his birth date
function validateDateFormat(date) {
  if (date.length == 10 && date.charAt(2) === "-" && date.charAt(5) === "-") {
    return date;
  } else return false;
}
function showDate() {
  let date = prompt(
    "Enter your birth date with the following format (DD – MM – YYYY) ex. 22–01–1999"
  );
  if (validateDateFormat(date)) {
    let [day, month, year] = date.split("-");
    let formatedDate = new Date(year, month - 1, day);
    alert("Your birth date is: " + formatedDate.toDateString());
  } else {
    console.log("Please enter a valid date");
    showDate();
  }
}
document.getElementById("birthDateButton").addEventListener("click", showDate);

// 9- use try catch on you page
console.log('using try-catch : ')
function throwError() {
    console.log(x);
  }
  try {
    throwError();
  } catch (error) {
    console.error("Error caught using try-catch:", error.message);
  }
  throwError();
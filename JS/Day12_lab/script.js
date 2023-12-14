// 1-
let newSet = new Set(["ali", "mohamed", "samir", "nsaer", "zakir"]);
newSet.add("ali", "ahmed", "mohamed");
let values = [...newSet];
for (const value of values) {
  console.log(value);
}

// 2-
let newMap = new Map([
  [
    "Mahmoud",
    {
      grades: [
        { coursenames: "javascript", grade: "good" },
        { coursenames: "css", grade: "verygood" },
        { coursenames: "javascript", grade: "excellent" },
      ],
    },
  ],
  [
    "Sami",
    {
      grades: [
        { coursenames: "javascript", grade: "verygood" },
        { coursenames: "css", grade: "excellent" },
        { coursenames: "javascript", grade: "good" },
      ],
    },
  ],
  [
    "Mohamed",
    {
      grades: [
        { coursenames: "javascript", grade: "excellent" },
        { coursenames: "css", grade: "good" },
        { coursenames: "javascript", grade: "verygood" },
      ],
    },
  ],
]);

newMap.forEach((grades, names) => {
  console.log("Student name: " + names);
  grades.grades.forEach((course) =>
    console.log(`${course.coursenames}: ${course.grade}`)
  );
});

// 3-

let newArr = [1, 5, 3, 4, 2, 4, 6, 8, 5];
console.log("Using Filter");
newArr.filter((value) => {
  if (value % 2 !== 0) {
    console.log(value);
  }
});
console.log("Using forEach");
newArr.forEach((value) => {
  if (value % 2 === 0) {
    console.log(value);
  }
});
console.log("getting the first element bigger than 5");
for (let i = 0; i < newArr.length; i++) {
  if (newArr[i] > 5) {
    console.log(newArr[i]);
    break;
  }
}
console.log("make a new array double the value using map");
let newValue = newArr.map((v) => v * 2);
console.log(newValue);

// 4-
let tips = [
  "tip1",
  "tip2",
  "tip3",
  "tip4",
  "tip5",
  "tip6",
  "tip7",
  "tip8",
  "tip9",
  "tip10",
];

const display = document.getElementById("displayTips");
function* tipGenerator() {
  for (let tip of tips) {
    display.innerHTML = tip;
    yield;
  }
}

let generator = tipGenerator();

document.getElementById("nextButton").addEventListener("click", displayNextTip);

function displayNextTip() {
  generator.next();
}
setInterval(displayNextTip, 3000);

document.getElementById("allTips").addEventListener("click", displayAll);

function displayAll() {
  for (let tip of tips) {
    document.body.innerHTML += tip + "<br>";
  }
}

// 5-
(function () {
  let sum = 7 + 1;
  alert(sum);
})();

//6-

function displayCourse(course) {
    const requiredProperties = ["courseName", "courseDuration", "courseOwner"];

    for (const prop of requiredProperties) {
      if (!course.hasOwnProperty(prop)) {
        throw new Error(`Missing required property:  + ${prop}`);
      }
    }
  
    let name = course.courseName;
    let duration = course.courseDuration;
    let owner = course.courseOwner;
    console.log(
      `courseName=${name} ,courseDuration=${duration}, courseOwner=${owner}.`
    );
}
var myCourse = {
    courseName: "ES6",
    courseDuration: "3 days",
    courseOwner: "javascript",
  };
  var invalidCourse = {
      courseName: "ES6",
      courseDuration: "3 days",
      
  }
try {
    displayCourse(myCourse)
    displayCourse(invalidCourse)
} catch (e) {
    console.log(e.message);
}

// 7- 
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

var allStrings = fruits.every((fruit) => typeof fruit === "string");
console.log("Every element is a string:", allStrings);

var someStartWithA = fruits.some((fruit) => fruit.startsWith("a"));
console.log("Some elements start with 'a':", someStartWithA);

var filteredArray = fruits.filter((fruit) => fruit.startsWith("b") || fruit.startsWith("s"));
console.log("Filtered array:", filteredArray);

console.log("Elements of the filtered array:");
filteredArray.forEach((fruit) => console.log(fruit));

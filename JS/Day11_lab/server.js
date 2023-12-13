// 1-
let arr = ["ahmed", "zakir", "Ali", "Mona", "Salma"];

for (let index in arr) {
  console.log(index);
  console.log(arr[index]);
}

for (let name of arr) {
  console.log(name);
}

arr.forEach((value, index) => console.log(index, value));

// 2-
let arr2 = ["sam", "johng", "jake"];

let newArr = [...arr, ...arr2];

console.log(newArr);

// 3-
let student = {
  Std_name: "Ali Elgohary",
  fac_name: "Computer Science",
  Uni_name: "KFS University",
  grad: "C",
};

console.log(
  `${student.Std_name} is a student was faculty of ${student.fac_name} in university ${student.Uni_name} and his final grade is ${student.grad}.`
);

// 4- 
let str = 'heloo'
if(str.includes('e')){
    console.log(`Yes, ${str} includes the letter e`);
}

// 5-

let person = {
    name: 'Ali',
    age: null,
    country: 'Egypt',
  };
  person.age = person.age ?? 25;
  console.log(person);
  
// 6- 

const metadata = {
    title: 'Scratchpad',
    translations: [
      {
        locale: 'de',
        localization_tags: ['de-gen', 'de-or'],
        last_edit: '2014-04-14T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        titles: 'JavaScript-Umgebung',
      },
    ],
  };
  
  const { title, translations: [{ localization_tags }] } = metadata;
  console.log('Localization Tags:', localization_tags);
  

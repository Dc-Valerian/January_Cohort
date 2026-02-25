// const name = "Pedro"; //GLOBAL SCOPE

// function greet() {
//   console.log(name);
// }

// greet();

// function boy() {
//   const age = 25; //LOCAL SCOPE
//   console.log(age);
// }

// boy();

// console.log(age);

// CLOSURE IS MORE LIKE WHEN AN INNER FUNCTION REMEMBERS VARIABLES FROM AN OUTER FUNCTION EVEN AFTER THE OUTER FUNCTION HAS FINISHED EXECUTING OR RUNNING

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const counter = outer();
counter();
counter();
counter();
counter();
counter();
counter();

// A CALLBACK IS A FUNCTION PASSED INTO ANOTHER FUNCTION TO RUN LATER

function call(name, secondName) {
  console.log("Hello" + name);

  secondName();
}

function say() {
  console.log("GoodBye!");
}

call("Pedro", say);

// setTimeout runs once after delay

// setTimeout(function () {
//   console.log("Hello after 3 seconds");
// }, 4000);

// setTimeout(function () {
//   console.log("Anything of your choice");
// }, 9000);

// setInterval runs repeatedly after delay
// setInterval(function () {
//   console.log("Repeating.....");
// }, 3000);

// Arrow function

// function add() {
//   return 2 + 3;
// }

// const add = (a, b) => {
//   return a + b;
// };

// const add = (a, b) => a + b;

// Destructuring is a javascript feature that allows you to extract values from arrays or object and store them into variables

let person = {
  name: "Pedro",
  age: 25,
};

let { name, age } = person;
console.log(name);

const numbers = [1, 2, 3, 4, 5];

const [lion, , boy, , girl] = numbers;

// console.log();

// Spread Operator spread or expands value

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

const combined = [...arr1, ...arr2];

console.log(combined);

const user = {
  name: "Pedro",
  age: 29,
};

const updatedUser = {
  ...user,
  age: 30,
};


console.log(updatedUser);

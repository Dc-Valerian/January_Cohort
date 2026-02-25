// console.log("Testing");

// const get = document.getElementById("getting");

// console.log(get);

// document.getElementById("btn").addEventListener("click", function () {
//   alert("button is clicked");
// });

// const buttonclick = document.getElementById("btn");

// buttonclick.addEventListener("click", function () {
//   alert("button is clicked");
// });

// console.log(buttonclick[0], buttonclick[1]);

// buttonclick.addEventListener("click", function () {
//   alert("button is clicked");
// });

// const text = document.getElementById("text");
// const colorChange = document.getElementById("colorchange");

// colorChange.addEventListener("click", function () {
//   text.style.color = "red";
// });

// const score = 39;

// if (score >= 70) {
//   console.log("Grade A");
// } else if (score >= 60) {
//   console.log("Grade B");
// } else if (score >= 50) {
//   console.log("Grade C");
// } else if (score >= 40 || score >= 30) {
//   console.log("Grade D");
// } else {
//   console.log("Failed");
// }

// // Teranry Operator

// const age = 12;

// if (age >= 18) {
//   console.log("you can vote");
// } else {
//   console.log("You're a child!! you can't vote");
// }

// const age2 = 23;

// const result = age2 >= 18 ? "You're an adult" : "You're a child";

// const age3 = 12;
// // const isCitizen = true;

// if (age >= 18 && isCitizen === true) {
//   console.log("You're eligible to vote");
// } else {
//   console.log("You're not eligible to vote");
// }

// const age4 = 20;
// const isCitizen = true;
// const hasVoterCard = false;

// if (age4 < 19) {
//   console.log("You are too young to vote");
// } else if (!isCitizen) {
//   console.log("You are not a citizen and cannot vote");
// } else if (!hasVoterCard) {
//   console.log("You need to a voter to vote");
// } else {
//   console.log("You are eligible to vote");
// }

const button = document.getElementById("checkBtn");

const result = document.getElementById("result");

button.addEventListener("click", function () {
  let age = document.getElementById("ageInput").value;

  if (age >= 18) {
    result.textContent = "You are eligible to vote!";

  } else {
    result.textContent = "You are not eligible to vote.";
  }
});

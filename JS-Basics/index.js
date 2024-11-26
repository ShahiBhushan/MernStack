// console.log("hello World");
// //if/else Statement;
// //Switch case

if (name === "Bhushan") {
  alert("welcome admin");
} else {
  alert("welcome Guest");
}
// //write a program to print the sonth based on number inserted
const month = prompt("What is the numer of month");
const monthNum = Number(month);
switch (month) {
  case "1":
    alert("jan");
    break;

  case "2":
    alert("feb");
    break;

  default:
    alert("wrong month");
}

// //Ternary Operator
const number = 10;
//  if(number>5){}else()
const isNumBigger = number > 5 ? true : false;

const gender = "m";
const genderData =
  gender === "m"
    ? alert("male")
    : gender === "f"
    ? alert("female")
    : alert("other");
const per = prompt("enter  per");
const perNum = Number(per);
const division =
  per >= 80
    ? alert("first")
    : per >= 60 && per <= 79
    ? alert("second")
    : alert(" you are fail");

//LOOPS
// for,do while, while

for (let i = 1; i <= 10; i++) {
  console.log(`2*${i}`, 2 * i);
}

//Functions
//Function is an engine that takes input and gives out put
//function achives to programing principle
// 1. Dry (doNot repeat yourself)
// 2. SoC (Separation of Concern)

// ES5

//Function define/declare
function sum(a, b) {
  return a + b;
}
//call function
const num1 = 1234561;
const num2 = 4313551;
const result = sum(num1, num2);
console.log(result);

//write a function to take gender as parameter(m,f,o) the funcytion  shoud retuirn the full form of  m,f,o.
function genderMaker(gender) {
  const fullForm =
    gender === "m" ? "male" : gender === "f" ? "Female" : "Other";
  return fullForm;
}

console.log(genderMaker(prompt("enter m,f,o")));

//ES6

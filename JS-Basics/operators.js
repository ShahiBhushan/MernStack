//REPL=Read Evaluat print loop
//write a progarm that store the user information about their birth year and calculate age
// const year = Number(prompt("What is your birth year?")); //type casting string to Number

console.log(year);
//type casting=> Conversion of data type from one data to another
const age = 2024 - year;
console.log(age);

//statement
//below 10 child, below 18 teen,above 19 adulta,exact or above 60 old
const condition = age > 18;
if (condition) {
  alert("You are adult");
} else {
  alert("You are  child");
}

//ternary Operator

//variable=condition ? true statement : false statement
const result = age > 18 ? alert("you are adult") : alert("You are Child");

// write a program that accept your name  Show alert message "welcome Admin" else say "Welcome Guest"
const name = prompt("What is your name");
const output =
  name === "Bhushan" ? alert("Welcome admin") : alert("Welcome guest");

//write a program that prints the if week or weekend  based on day input using switch case (monday-Friday==>print week day and saturday-Sunday=>print weekend)
const day = prompt("Enter number from 1 to 7 representing a week");
switch (Number(day)) {
  case 1:
    console.log("weekend");
    break;
  case 2:
    console.log("weekday");
    break;
  case 3:
    console.log("weekday");
    break;
  case 4:
    console.log("weekday");
    break;
  case 5:
    console.log("weekday");
    break;
  case 6:
    console.log("weekday");
    break;
  case 7:
    console.log("weekend");
    break;
  default:
    console.log("Invalid Day");
}

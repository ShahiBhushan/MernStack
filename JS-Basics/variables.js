// //variables
// //const ,let
// const age = 25;
// const doYouHaveNagarita = true;
// let person;
// let x = null;
// console.log(age, doYouHaveNagarita, person, x);

// //Interaction: prompt() ,alert(), confirm
// const ages = prompt("What is a age");
// console.log(ages);
const age = prompt("what is your age");
const doYouHaveNagarita = confirm("Do you have Nagarita");
if (age >= 18 && doYouHaveNagarita) {
  alert("you are eligible to apply");
} else {
  alert("you are not eligible");
}

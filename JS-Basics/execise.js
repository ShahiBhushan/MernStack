// function to calculate are of rectangle

// step1 remenber function syntax
// step2 name the function
// step3 define the inputs(parameters)
// step4 write logic
// step 5 return the output

//ES5
function area(l, b) {
  const result = l * b;
  return result;
}
const myArea = area(5, 10);
console.log(myArea);

// ES6
const es6Area = (l, b) => {
  const result = l * b;
  return result;
};
const es6myArea = es6Area(5, 10);
console.log(es6myArea);

// write a es6 function to check the based  on  the age of person
//baby 0-2
//young adults 3-39
//middle age adults 40-59
//old adults 60-99
const ageGroup = (age) => {
  const ageNum = Number(age);
  const ageG =
    ageNum > 0 && ageNum <= 2
      ? "baby"
      : ageNum >= 3 && ageNum <= 39
      ? "young Adults"
      : ageNum >= 40 && ageNum <= 59
      ? "Middile age  Adults"
      : "old adults";
  return ageG;
};
const age = prompt(Number("enter"));
console.log(ageGroup(age));

//default function
//closure
//parameterrized function
//implicit function
//explicit function
//calback function

//default function
const newFun = (name = "guest") => {
  return name === "bhushan" ? "welcome Admin" : `welcome ${name}`;
};
console.log(newFun());

//parameterrized function
const parameterrizedFunction1 = (a, b) => {
  return a * b;
};
const parameterrizedFunction2 = ({ a, b, c, d, e, g }) => {
  return a * b * c * d * e;
};
console.log(parameterrizedFunction1(3, 4));
console.log(parameterrizedFunction2({ b: 3, c: 4 }));

//implicit function(utility function)
const implicitFunction = (a, b) => a * b;

//explicit function
const expFunction = (l) => {
  return l * l;
};

//callBack Function = if a function takes another function as a parameter is called callback function

const fun1 = (num) => {
  const result = num % 2 === 0 ? "even" : "odd";
  return `${num} is a ${result}number`;
};
const fun2 = (num, cd) => {
  return cd(num);
};
console.log(fun2(5, fun1));

//closure
//function  can return vakue
//function can accept function as parameter and return the value
//Function can accept input and return function as output =>closure
// let count = 0;
// const counter = () => {
//   return count++;
// };
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

const closure = () => {
  let count = 0;
  return () => {
    return count++;
  };
};
const counterA = closure();
const counterB = closure();

console.log(counterA());
console.log(counterA());
console.log(counterA());
console.log(counterA());

console.log(counterB());
console.log(counterB());
console.log(counterB());
console.log(counterB());

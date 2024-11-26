// Write a JavaScript function that reverses a number. Example x = 32243; Expected Output : 34223
function reverseNumber(num) {
  const numStr = num.toString();
  const reverseString = numStr.split("").reverse().join("");
  const reversedNum = parseInt(reversedNum, 10);
  return reversedNum;
}
const x = prompt("enter max 10 digit number");
console.log(reverseNumber(x));

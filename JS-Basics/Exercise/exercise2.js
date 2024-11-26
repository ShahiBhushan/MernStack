//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function countVowels(str) {
  const lowerCaseStr = str.toLowerCase();
  const vowels = "aeiou";
  let count = 0;
  for (let char of lowerCaseStr) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
const inputString = prompt("Enter the Paragraph");
console.log(countVowels(inputString));

//string (text log paragraph)

// const text = "bhushan shahi";
// console.log(typeof text);

//string manipulation
//writeb a function that returs tru for text check if the text is email

const checkEmail = (email) => {
  // Regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const email = "Enter@email";

if (checkEmail(email)) {
  console.log(checkEmail("Valid email address"));
} else {
  console.log(checkEmail("Invalid email address"));
}

//goto mozilla string js document
//look for relevant method to solve the above probles
//use that method to solve function
//return the boolean result

//write a js es6 function that truncates the long text into short text.
//"we are learning js from broadway=> we are lelarning js.."
const truncateText = (text, maxLength) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

const longText = "We are learning JavaScript from Broadway";
const shortText = truncateText(longText, 10);

console.log(shortText);

//write a js function to find the most repeated character in the text
//apple=>p
//ball =>l
const findMostRepChar = (str) => {
  const charMap = {};
  let maxChar = null;
  let maxCount = 0;
  for (const char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
    if (charMap[char] > maxCount) {
      maxChar = char;
      maxCount = charMap[char];
    }
  }
  return { maxChar, maxCount };
};
console.log(findMostRepChar("apple"));

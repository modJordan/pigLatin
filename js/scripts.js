// Utility Logic
function isEmpty() {
  for (let i = 0; i < arguments.length; i++) {
    if (Number.isNaN(arguments[i])) {
      return false;
    } else if (typeof arguments[i] === 'string') {
      return arguments[i];
    }
  } return
}

// Business Logic


// 1. split up string into array/define vowels
// 2. want find indexes in array that start with a vowels
// 3. we want to add "way" to the end 
// 4. we want to rejoin the string together 
// 5. we want to output the result of the function

function vowels2(string) {
  if (isEmpty(string)) {
    return string;
  }
  let stringArr = [string.toLowerCase().split(" ")];
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < stringArr.length; i++) {
    const ifVowel = [string[i, 0]];
    if (ifVowel.includes(vowels) === true) {
      let strWay = stringArr[i].concat("way");
      let newStr = stringArr.push(strWay);
      return newStr;
    }
  }
}


// UI Logic

function handleFormSubmission(e) {
  e.preventDefault();
  let string = document.getElementById("form-latin").value;
  vowels2(string);
  if (vowels2) {
    document.querySelector("p").append(vowels2);
  } else {
    document.querySelector("p").innerText = null;
  }
}

window.addEventListener("load", function () {
  document.querySelector("form#form-latin").addEventListener("submit", handleFormSubmission);
});



function vowels(string) {
  if (isEmpty(string)) {
    return string;
  }
  for (i = 0; i < string.length; i++) {
    if (string.charAt(i)(/[aeiou]/i)) {
      return string.concat("way");
    }
  }
  let strArray = string.split(" ")
  const vowelWords = strArray.map(function (vowels) {
    return vowelWords.join(" ");
  });
}

// function vowels(string) {
//   if (isEmpty(string)) {
//     return string;
//   } for (i = 0; i < string.length; i++) {
//     if (string.charAt(0)[aeiou]) {
//       return string.concat("way");
//     }
//     let strArray = string.split(" ")
//     const vowelWords = strArray.map(function () {
//       return vowelWords.join(" ");
//     });
//   }
// }
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
// 1. split up string into array
// 2. want find indexes in array that start with a vowels
// 3. we want to add "way" to the end 
// 4. we want to rejoin the string together 
// 5. we want to output the result of the function

function vowels2(string) {
  if (isEmpty(string)) {
    return string;
  }
  let stringArr = string.split(" ");
  for (i = 0; i < stringArr.length; i++) {
    if (stringArr[i].includes(/[^aeiou]/)) {
      let strWay = strWay.concat("way");
      let newStr = strWay.join(" ");
      return newStr;
    }
  }
}

function vowels(string) {
  if (isEmpty(string)) {
    return string;
  } for (i = 0; i < string.length; i++) {
    if (string.charAt(0)[aeiou]) {
      return string.concat("way");
    }
    let strArray = string.split(" ")
    const vowelWords = strArray.map(function () {
      return vowelWords.join(" ");
    });
  }
}


// UI Logic

function handleFormSubmission(e) {
  e.preventDefault();
  let passage = document.getElementById("form-latin").value;
  let latinArr = passage.split(" ");

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
}
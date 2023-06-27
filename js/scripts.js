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



// UI Logic

function handleFormSubmission(e) {
  e.preventDefault();
  let passage = document.getElementById("form-latin").value;
  let latinArr = [passage]
}

window.addEventListener("load", function () {
  document.querySelector("form#form-latin").addEventListener("submit", handleFormSubmission);
});
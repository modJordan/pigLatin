// Utility Logic



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
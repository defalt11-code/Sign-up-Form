//For animation when page load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".wrapper").classList.add("animate");
});

//For form to confirm the password actually match
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector("form");

console.log(confirmPassword);

form.addEventListener("submit", (e) => {
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    confirmPassword.setCustomValidity("Passwords do not match");
    confirmPassword.reportValidity();
  } else {
    confirmPassword.setCustomValidity("");
  }
});

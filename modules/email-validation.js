const emailInput = document.querySelector("#emailInput");
const resultMessage = document.querySelector("#resultMessage");
const emailForm = document.querySelector("#emailForm");

emailForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value;

  const isValid = validateEmail(email);

  if (isValid) {
    resultMessage.textContent = "Subscribed!";
    resultMessage.style.color = "green";
    console.log(isValid);
  } else {
    resultMessage.textContent = "Invalid email!";
    resultMessage.style.color = "red";
    console.log(isValid);
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

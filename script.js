const form = document.getElementById("usrform");
const greeting = document.getElementById("greetings");
const ageMonths = document.getElementById("ageInMonths");
const adultMessage = document.getElementById("adultContent");
const quotesDiv = document.getElementById("quotes");

window.onload = function () {
  const name = localStorage.getItem("name");
  const age = localStorage.getItem("age");

   if (name && age) {
    displayData(name, age);
  }
}


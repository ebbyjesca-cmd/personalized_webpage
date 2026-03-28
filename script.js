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
};


function displayData(name, age){
    console.log('hello ${name}, age ${age}')
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  localStorage.setItem("name", name);
  localStorage.setItem("age", age);

  displayData(name, age);
});

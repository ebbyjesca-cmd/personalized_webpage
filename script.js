const form = document.getElementById("usrform");
const greeting = document.getElementById("greetings");
const ageInMonths = document.getElementById("ageInMonths");
const adultContent = document.getElementById("adultContent");
const quotesDiv = document.getElementById("quotes");

window.onload = function () {
  const Name = localStorage.getItem("Name");
  const age = localStorage.getItem("age");

   if (Name && age) {
    displayData(Name, age);
  }
};


function displayData(Name, age){
    greeting.innerText = `hello, ${Name}`;
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const Name = document.getElementById("Name").value;
  const age = document.getElementById("age").value;

  localStorage.setItem("Name", Name);
  localStorage.setItem("age", age);

  const months = calculateMonths(age);
  ageInMonths.innerText = `You are ${months} months old.`;

  function calculateMonths(age) {
  return age * 12;
}
  displayData(Name, age);
});

if (age >=18) {
    adultContent.innerText = "you can access adult content"
}else  {
    adultContent.innerText = "you are still young"
}




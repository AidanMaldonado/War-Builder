//Dom variables
const startSection = document.querySelector(".start");
const countrySection = document.querySelector(".country");
const startBtn = document.querySelector("#start-btn");
const faction1 = document.querySelector("#faction1");
const faction2 = document.querySelector("#faction2");
const faction3 = document.querySelector("#faction3");

//Functions
const atStart = () => {
  countrySection.style.display = "none";
};

//Event listeners
startBtn.addEventListener("click", () => {
  startSection.style.display = "none";
  countrySection.style.display = "flex";
});

//Function calls
atStart();

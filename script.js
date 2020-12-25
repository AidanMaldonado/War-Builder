//Dom variables
const startSection = document.querySelector(".start");
const countrySection = document.querySelector(".country");
const gameSection = document.querySelector(".game");
const startBtn = document.querySelector("#start-btn");
const card1 = document.querySelector("#faction1");
const card2 = document.querySelector("#faction2");
const card3 = document.querySelector("#faction3");
const storyP = document.querySelector("#story-p");
const hud = document.querySelector("#hud");
const mapSection = document.querySelector(".map-section");
const matSection = document.querySelector(".mat-section");
//Slider buttons
const rightArrow = document.querySelector("#arrow-right");
//Game buttons
const map = document.querySelector("#map");
const mat = document.querySelector("#mat");

//Game variables
let card = 1;
let sCounter = 0;

//Functions
const atStart = () => {
  countrySection.style.display = "none";
  gameSection.style.display = "none";
  hud.style.display = "none";
  mapSection.style.display = "none";
  matSection.style.display = "none";
};

//Picks faction
const cardPicker = () => {
  card1.style.display = "flex";
  card2.style.display = "none";
  card3.style.display = "none";
};

const storyCounter = () => {
  sCounter += 1;
  //Change back to == 10 after testing is done
  if (sCounter == 2) {
    storyP.style.display = "none";
    hud.style.display = "flex";
  }
};

const pickedFaction = () => {
  countrySection.style.display = "none";
  gameSection.style.display = "flex";
};

//Event listeners
startBtn.addEventListener("click", () => {
  startSection.style.display = "none";
  countrySection.style.display = "flex";
});

//Moves the faction choices
rightArrow.addEventListener("click", () => {
  if (card == 1) {
    card1.style.display = "none";
    card2.style.display = "flex";
    card3.style.display = "none";
    card++;
  } else if (card == 2) {
    card1.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "flex";
    card = 0;
  } else {
    card1.style.display = "flex";
    card2.style.display = "none";
    card3.style.display = "none";
    card++;
  }
});

//Picks faction
card1.addEventListener("click", () => {
  pickedFaction();
});

card2.addEventListener("click", () => {
  pickedFaction();
});

card3.addEventListener("click", () => {
  pickedFaction();
});

//HUD buttons
map.addEventListener("click", () => {
  mapSection.style.display = "grid";
  matSection.style.display = "none";
  hud.style.display = "none";
});

mat.addEventListener("click", () => {
  mapSection.style.display = "none";
  hud.style.display = "none";
  matSection.style.display = "flex";
});

//Procedural Generation

//Function calls
atStart();
cardPicker();

//Game loop
window.setInterval(() => {
  storyCounter();
}, 1000);

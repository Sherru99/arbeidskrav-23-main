import WarriorModule from "./modules/Warrior-Module.js";
import OtherModule from "./modules/Other-Module.js";

// RESOURCES DIV
//

const resourceDiv = document.querySelector("#resource-div");

let goldCount = parseInt(localStorage.getItem("goldCount")) || 0;
let ironCount = parseInt(localStorage.getItem("ironCount")) || 0;
let woodCount = parseInt(localStorage.getItem("woodCount")) || 0;

const showAllResources = () => {
  let htmlTxt = "";

  htmlTxt = `

    <p id="wood-count">Wood: ${woodCount}</p>
    <p id="gold-count">Gold: ${goldCount}</p>
    <p id="iron-count">Iron: ${ironCount}</p>

        `;

  resourceDiv.innerHTML = htmlTxt;
};

function updateCounts() {
  // Save counts to localStorage
  localStorage.setItem("goldCount", goldCount);
  localStorage.setItem("ironCount", ironCount);
  localStorage.setItem("woodCount", woodCount);

  document.getElementById("gold-count").textContent = `Gold: ${goldCount}`;
  document.getElementById("iron-count").textContent = `Iron: ${ironCount}`;
  document.getElementById("wood-count").textContent = `Wood: ${woodCount}`;
}

//
// RESOURCES DIV

// GATHERING ARMY CODE
//

// Warriors
const viper = document.querySelector("#viper");
const giant = document.querySelector("#giant");
const paladin = document.querySelector("#paladin");
const rogue = document.querySelector("#rogue");
const knight = document.querySelector("#knight");
const archer = document.querySelector("#archer");

// Other (animals and war machines)
const cannon = document.querySelector("#cannon");
const catapult = document.querySelector("#catapult");
const elephant = document.querySelector("#elephant");

// Output Div
const warriorOutputDiv = document.querySelector("#buyable-warriors");

// StructuredClone object array copies

const other = OtherModule.getStructuredClone();
const warriors = WarriorModule.getStructuredClone();

// generating HTML in output divs :D

const createHTMLWarriors = () => {
  let htmlTxt = "";
  var i = 0;

  warriors.forEach((warrior) => {
    htmlTxt += `
      <div class="warrior-card">
      <h3>${warrior.categoryName} </h3>
      <img src=${warrior.image} />
          <button data-id="${i}" class="warrior-button">${warrior.categoryName}: ${warrior.priceGold}</button>
          </div>
      `;
    i++;
  });

  warriorOutputDiv.innerHTML = htmlTxt;
};

const createHTMLOthers = () => {
  let htmlTxt = "";
  var i = 0;

  other.forEach((other) => {
    htmlTxt += `
      <div class="warrior-card">
      <h3>${other.categoryName} </h3>
      <img src=${other.image} />
          <button data-id="${i}" class="other-button">${other.categoryName}: ${other.priceGold} ${other.priceWood} ${other.priceIron}</button>
          </div>
      `;
    i++;
  });

  warriorOutputDiv.innerHTML = htmlTxt;
};

// Functionality for buying stuff :P

const buyWarrior = (x) => {
  const categoryName = warriors[x].categoryName;
  const priceGold = warriors[x].priceGold;
  const image = warriors[x].image;

  const newWarrior = {
    categoryName: categoryName,
    priceGold: priceGold,
    image: image,
  };

  if (newWarrior.priceGold <= goldCount) {
    let r = goldCount - newWarrior.priceGold;
    goldCount = r;
    localStorage.setItem("goldCount", r);
    WarriorModule.saveWarrior(newWarrior);
    updateCounts();
  } else {
    alert("You do not have enough Gold!");
  }
};

const buyOther = (x) => {
  const categoryName = other[x].categoryName;
  const priceGold = other[x].priceGold;
  const priceWood = other[x].priceWood;
  const priceIron = other[x].priceIron;
  const image = other[x].image;

  const newOther = {
    categoryName: categoryName,
    priceGold: priceGold,
    priceWood: priceWood,
    priceIron: priceIron,
    image: image,
  };
  OtherModule.saveOther(newOther);
};

// Setting buying event listeners

const setWarriorButtonEvents = () => {
  const buttons = document.querySelectorAll(".warrior-button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => buyWarrior(i - 1));
    i++;
  });
};

const setOtherButtonEvents = () => {
  const buttons = document.querySelectorAll(".other-button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => buyOther(i - 1));
    i++;
  });
};

(() => {
  showAllResources();
  createHTMLWarriors();
  createHTMLOthers();
  setWarriorButtonEvents();
  setOtherButtonEvents();
})();

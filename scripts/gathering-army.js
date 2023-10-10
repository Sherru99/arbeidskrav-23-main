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

    <p id="wood-count">>Wood: ${woodCount}</p>
    <p id="gold-count">>Gold: ${goldCount}</p>
    <p id="iron-count">>Iron: ${ironCount}</p>

        `;

  resourceDiv.innerHTML = htmlTxt;
};

function updateCounts() {
  document.getElementById("gold-count").textContent = `Gold: ${goldCount}`;
  document.getElementById("iron-count").textContent = `Iron: ${ironCount}`;
  document.getElementById("wood-count").textContent = `Wood: ${woodCount}`;

  // Save counts to localStorage
  localStorage.setItem("goldCount", goldCount);
  localStorage.setItem("ironCount", ironCount);
  localStorage.setItem("woodCount", woodCount);
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

const warriors = [
  {
    categoryName: "viper",
    priceGold: 50,
    image: "./images/warrior-1.jpg",
  },
  {
    categoryName: "giant",
    priceGold: 50,
    image: "./images/warrior-2.jpg",
  },
  {
    categoryName: "paladin",
    priceGold: 50,
    image: "./images/warrior-3.jpg",
  },
  {
    categoryName: "rogue",
    priceGold: 50,
    image: "./images/warrior-4.jpg",
  },
  {
    categoryName: "knight",
    priceGold: 50,
    image: "./images/warrior-5.jpg",
  },
  {
    categoryName: "archer",
    priceGold: 50,
    image: "./images/warrior-6.jpg",
  },
];

const other = [
  {
    categoryName: "cannon",
    priceGold: 50,
    priceWood: 100,
    priceIron: 50,
    image: "./images/cannon.png",
  },
  {
    categoryName: "catapult",
    priceGold: 25,
    priceWood: 50,
    priceIron: 25,
    image: "./images/catapult.png",
  },
  {
    categoryName: "elephant",
    priceGold: 250,
    priceWood: 50,
    priceIron: 100,
    image: "./images/elephant.png",
  },
];

const buyWarrior = (x) => {
  const categoryName = warriors[x].categoryName;
  const priceGold = warriors[x].priceGold;
  const image = warriors[x].image;

  const newWarrior = {
    categoryName: categoryName,
    priceGold: priceGold,
    image: image,
  };
  WarriorModule.saveWarrior(newWarrior);
};

const buyOther = (x) => {
  const categoryName = other[x].categoryName;
  const priceGold = other[x].priceGold;
  const priceWood = other[x].priceWood;
  const priceIron = other[x].priceIron;
  const image = other[x].image;

  // TODO: check if input fields are filled out
  const newOther = {
    categoryName: categoryName,
    priceGold: priceGold,
    priceWood: priceWood,
    priceIron: priceIron,
    image: image,
  };
  OtherModule.saveOther(newOther);
};

// Buying warrior event listeners

giant.addEventListener("click", () => {
  buyWarrior(1);
});

paladin.addEventListener("click", () => {
  buyWarrior(2);
});

rogue.addEventListener("click", () => {
  buyWarrior(3);
});

knight.addEventListener("click", () => {
  buyWarrior(4);
});

archer.addEventListener("click", () => {
  buyWarrior(5);
});

viper.addEventListener("click", () => {
  buyWarrior(0);
});

// Buying Other event listeners

cannon.addEventListener("click", () => {
  buyOther(0);
});

catapult.addEventListener("click", () => {
  buyOther(1);
});

elephant.addEventListener("click", () => {
  buyOther(2);
});

(() => {
  showAllResources();
})();

import WarriorModule from "./modules/Warrior-Module.js";

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

// YOUR ARMY
//

const warriorOutput = document.querySelector("#warrior-output");

const getAllWarriors = () => {
  let htmlTxt = "";

  const warriorArray = WarriorModule.getAll();

  if (warriorArray.length > 0) {
    warriorArray.forEach((warrior) => {
      htmlTxt += `
              
                    <h3>${warrior.categoryName} </h3>
                    <img src=${warrior.image} />
            `;
    });
  } else {
    htmlTxt = "<p>Inget warriors i localStorage enda!</p>";
  }

  warriorOutput.innerHTML = htmlTxt;
};

(() => {
  showAllResources();
  getAllWarriors();
})();

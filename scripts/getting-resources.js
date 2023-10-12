const mines = document.querySelector("#mine-image");
const woods = document.querySelector("#wood-image");
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

const mineClick = () => {
  const isGold = Math.random() < 0.25;
  if (isGold) {
    // Edit this on release! ADMIN Mode
    let r = goldCount + 20;
    goldCount = r;
    //
    updateCounts();
  } else {
    ironCount++;
    updateCounts();
  }
};

const woodClick = () => {
  woodCount += Math.floor(Math.random() * 10) + 1; // Random wood between 1 and 10
  updateCounts();
  showAllResources();
};

mines.addEventListener("click", mineClick);
woods.addEventListener("click", woodClick);

(() => {
  showAllResources();
})();

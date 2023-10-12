const WarriorModule = (() => {
  const itemName = "warriors";

  const warriors = [
    {
      categoryName: "viper",
      priceGold: 250,
      image: "./images/warrior-1.jpg",
    },
    {
      categoryName: "giant",
      priceGold: 500,
      image: "./images/warrior-2.jpg",
    },
    {
      categoryName: "paladin",
      priceGold: 450,
      image: "./images/warrior-3.jpg",
    },
    {
      categoryName: "rogue",
      priceGold: 450,
      image: "./images/warrior-4.jpg",
    },
    {
      categoryName: "knight",
      priceGold: 500,
      image: "./images/warrior-5.jpg",
    },
    {
      categoryName: "archer",
      priceGold: 450,
      image: "./images/warrior-6.jpg",
    },
  ];

  const getStructuredClone = () => {
    return structuredClone(warriors);
  };

  const getAll = () => {
    return getLocalStorageOrEmptyArray();
  };

  const saveWarrior = (newWarrior) => {
    const warriorArray = getLocalStorageOrEmptyArray();
    warriorArray.push(newWarrior);
    localStorage.setItem(itemName, JSON.stringify(warriorArray));
  };

  // HELPERS
  const getLocalStorageOrEmptyArray = () => {
    if (localStorage.getItem(itemName) != null) {
      const warriorArray = JSON.parse(localStorage.getItem(itemName));
      return warriorArray;
    } else {
      return [];
    }
  };

  return {
    getAll,
    saveWarrior,
    getStructuredClone,
  };
})();

export default WarriorModule;

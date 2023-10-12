const OtherModule = (() => {
  const itemName = "other";

  const other = [
    {
      categoryName: "cannon",
      priceGold: 1000,
      priceWood: 1000,
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

  const getStructuredClone = () => {
    return structuredClone(other);
  };

  const getAll = () => {
    return getLocalStorageOrEmptyArray();
  };

  const saveOther = (newOther) => {
    const otherArray = getLocalStorageOrEmptyArray();
    newOther.id = Math.floor(Math.random() * 999999); // Ikke optimal måte å lage id på siden det er en viss risiko at man får like id'er, men vises her som et konsept.
    otherArray.push(newOther);
    localStorage.setItem(itemName, JSON.stringify(otherArray));
  };

  // HELPERS
  const getLocalStorageOrEmptyArray = () => {
    if (localStorage.getItem(itemName) != null) {
      const otherArray = JSON.parse(localStorage.getItem(itemName));
      return otherArray;
    } else {
      return [];
    }
  };

  return {
    getAll,
    saveOther,
    getStructuredClone,
  };
})();

export default OtherModule;

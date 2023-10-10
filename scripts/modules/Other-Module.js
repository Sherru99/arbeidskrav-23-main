const OtherModule = (() => {
  const itemName = "other";

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
  };
})();

export default OtherModule;

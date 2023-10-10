const WarriorModule = (() => {
  const itemName = "warriors";

  const getAll = () => {
    return getLocalStorageOrEmptyArray();
  };

  const saveWarrior = (newWarrior) => {
    const warriorArray = getLocalStorageOrEmptyArray();
    newWwarrior.id = Math.floor(Math.random() * 999999); // Ikke optimal måte å lage id på siden det er en viss risiko at man får like id'er, men vises her som et konsept.
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
  };
})();

export default WarriorModule;

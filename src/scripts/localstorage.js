const SaveName = (name) => {
    let nameArr = GetSavednameFromLocalStorage();
    if (!nameArr.includes(name)) {
      nameArr.push(name);
    }
    localStorage.setItem("SavedNames", JSON.stringify(nameArr));
  };
  
  const GetSavedNamesFromLocalStorage = () => {
    let localStorageData = localStorage.getItem("SavedNames");
    if (localStorageData == null) {
      return [];
    }
    return JSON.parse(localStorageData);
  };
  
  const RemoveFromSavedName = (nameToRemove) => {
      let localStorageData = GetSavedNamesFromLocalStorage();
      const updatedNames = localStorageData.filter(name => 
          name.Id !== nameToRemove.Id
      );
      localStorage.setItem("SavedNames", JSON.stringify(updatedNames));
  };

export {
    SaveName,
    GetSavedNamesFromLocalStorage,
    RemoveFromSavedName
}
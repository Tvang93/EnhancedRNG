import {
    SaveName,
    GetSavedNamesFromLocalStorage,
    RemoveFromSavedName
} from "./localstorage.js"

const GenerateRandomName = () => {
    let namesList = GetSavedNamesFromLocalStorage().map((names) => names.Name);
    console.log(Math.floor(Math.random()*namesList.length))
    return namesList[Math.floor(Math.random()*namesList.length)]
}

export {GenerateRandomName}
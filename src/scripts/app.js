import {
    SaveName,
    GetSavedNamesFromLocalStorage,
    RemoveFromSavedName
} from "./localstorage.js"
import {
    CreateNamesList, 
    SetNamesCount
} from "./createNamesList.js"
import { GenerateRandomName } from "./generateRandomName.js";
import { 
    GenerateRandomGroups,
    TogglePeopleOrGroupSize
 } from "./generateRandomGroups.js";

const nameInputField = document.getElementById("nameInputField");
const addNameBtn = document.getElementById("addNameBtn");
const randomNameBtn = document.getElementById("randomNameBtn");
const inputField = document.getElementById("inputField");
const togglePersonOrGroupBtn = document.getElementById("togglePersonOrGroupBtn");
const generateGroupsBtn = document.getElementById("generateGroupsBtn");
const namesCount = document.getElementById("namesCount");
const namesContainer = document.getElementById("namesContainer");


let nameObject = {
    Id: 0,
    Name: ""
}

addNameBtn.addEventListener('click', () => {
    if(nameInputField.value.trim() !== ''){
        nameObject.Id = Date.now();
        nameObject.Name = nameInputField.value;
        SaveName(nameObject);
        CreateNamesList();
        nameInputField.value = '';
    }
})

randomNameBtn.addEventListener('click', () => {
    alert(GenerateRandomName());
})

togglePersonOrGroupBtn.addEventListener('click', ()=>{
    TogglePeopleOrGroupSize()
    
})

generateGroupsBtn.addEventListener('click', () => {
    if(inputField.value.trim() !== '') {
        GenerateRandomGroups(inputField.value)
        console.log(inputField.value)
        
    }
})


CreateNamesList();
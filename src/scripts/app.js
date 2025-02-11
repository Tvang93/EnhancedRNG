import {
    SaveName,
    GetSavedNamesFromLocalStorage,
    RemoveFromSavedName
} from "./localstorage.js"

const nameInputField = document.getElementById("nameInputField");
const addNameBtn = document.getElementById("addNameBtn");
const randomNameBtn = document.getElementById("randomNameBtn");
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
    }
})

const CreateNamesList = () => {
    namesContainer.innerHtml = '';
    let savedNamesList = GetSavedNamesFromLocalStorage();
    let namesCounter = 0

    savedNamesList.map((names) => {
        let nameDiv = document.createElement('div');
        nameDiv.classList = 'flex justify-evenly';

        let removeBtn = document.createElement('button');
        removeBtn.classList = 'border-2';
        removeBtn.innerText = 'Remove';
        removeBtn.addEventListener('click', () => {
            RemoveFromSavedName(names);
            nameDiv.remove();
            namesCounter = savedNamesList
                .filter(n => n.Id !== names.Id)
                .length
            SetNamesCount(namesCounter);
        })

        let savedNameText = document.createElement('h1');
        savedNameText.innerText = names.Name;

        nameDiv.appendChild(savedNameText);
        nameDiv.appendChild(removeBtn);
        
        namesContainer.appendChild(nameDiv);
        namesCounter++
    })
    SetNamesCount(namesCounter);
}

const SetNamesCount = (num) => {
    namesCount.innerText = `Total Names: ${num}`;
}

CreateNamesList();
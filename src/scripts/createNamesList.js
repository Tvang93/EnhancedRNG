import {
    SaveName,
    GetSavedNamesFromLocalStorage,
    RemoveFromSavedName
} from "./localstorage.js"



const CreateNamesList = () => {
    namesContainer.innerHTML = '';
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
            namesCounter = GetSavedNamesFromLocalStorage()
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

export {CreateNamesList, SetNamesCount}
import {
    SaveName,
    GetSavedNamesFromLocalStorage,
    RemoveFromSavedName
} from "./localstorage.js"

let isPersonsPerGroup = true

const GenerateRandomGroups = (num) => {
    if(GetSavedNamesFromLocalStorage().length != 0){
        if(isPersonsPerGroup){
            let savedNamesList = GetSavedNamesFromLocalStorage();
            let numArray = [];
            let randomNumArr = [];
            let groupedArr = [];
            let newererArr = []
            

            for(let i = 0; i < savedNamesList.length; i++){
                numArray.push(i)
            };

            for(let i = 0; i < savedNamesList.length; i++){
                let rnum = Math.floor(Math.random()*numArray.length);
                randomNumArr.push(numArray[rnum]);
                numArray = numArray.filter(num => num != numArray[rnum]);
            };

            console.log(randomNumArr)
            
            for(let i = 0; i < Math.ceil(savedNamesList.length/num); i++){
                newererArr = []
                for(let j = 0; j < num; j++){
                    if(randomNumArr.length>0){
                        newererArr.push(randomNumArr[j])
                    }
                }
                groupedArr.push(newererArr);
                randomNumArr.splice(0, num)
            }

            console.log(groupedArr)
            
            console.log("People Per Group")
        }

        if(!isPersonsPerGroup){
            console.log("Number of Groups")
            let savedNamesList = GetSavedNamesFromLocalStorage();
            let numArray = [];
            let randomNumArr = [];
            

            for(let i = 0; i < savedNamesList.length; i++){
                numArray.push(i)
            };

            for(let i = 0; i < savedNamesList.length; i++){
                let rnum = Math.floor(Math.random()*numArray.length);
                randomNumArr.push(numArray[rnum]);
                numArray = numArray.filter(num => num != numArray[rnum]);
            };

            console.log(randomNumArr)

            

            

        }

    }else{
        alert("You have no names saved.")
    }
}

const TogglePeopleOrGroupSize = () => {
    if(isPersonsPerGroup){
        togglePersonOrGroupBtn.innerText = "Number of Groups"
    }else(
        togglePersonOrGroupBtn.innerText = "People per Group"
    )
    isPersonsPerGroup = !isPersonsPerGroup
}

export{GenerateRandomGroups, TogglePeopleOrGroupSize}
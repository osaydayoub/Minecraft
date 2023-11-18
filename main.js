const WorldArray = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
];

function addColor(array, indexArry, colorNumber) {
    for (let i = 0; i < indexArry.length; i++) {
        array[indexArry[i][0]][indexArry[i][1]] = colorNumber;
    }
}

const cloudIndexArray = [[0, 10], [0, 11], [0, 16], [0, 17], [1, 9], [1, 10], [1, 11], [1, 12], [1, 16], [1, 17], [2, 10], [2, 11], [2, 15]];
addColor(WorldArray, cloudIndexArray, 2);

const greenTreeArray = [[2, 2], [2, 20], [3, 1], [3, 2], [3, 3], [3, 19], [3, 20], [3, 21], [4, 1], [4, 2], [4, 3], [4, 18], [4, 19], [4, 20],
[4, 21], [4, 22], [5, 1], [5, 2], [5, 3], [5, 17], [5, 18], [5, 19], [5, 20], [5, 21], [5, 22], [5, 23], [7, 10], [8, 9], [8, 10], [8, 11]];
addColor(WorldArray, greenTreeArray, 3);

const woodArray = [[6, 2], [7, 2], [8, 2], [6, 19], [7, 19], [8, 19], [6, 20], [7, 20], [8, 20], [6, 21], [7, 21], [8, 21]];
addColor(WorldArray, woodArray, 4);

const grayRocksArray = [[7, 4], [7, 5], [7, 16], [8, 4], [8, 5], [8, 6], [8, 16], [8, 17], [8, 26]]
addColor(WorldArray, grayRocksArray, 5);


function getClassName(number) {
    let className = '';
    switch (number) {
        case 1:
            className = "skyblue-color";
            break;
        case 2:
            className = "white-color";
            break;
        case 3:
            className = "green-color";
            break;
        case 4:
            className = "wood-color";
            break;
        case 5:
            className = "gray-color";
            break;
        case 6:
            className = "sand-color";
            break;
        default:
            className = "";
            break;
    }
    return className;
}



const worldContainer = document.querySelector(".world-container");
const matrixRowsNumber = 13;
const matrixColumnsNumber = 28;
const initGame = () => {
    worldContainer.innerHTML = "";
    for (let i = 0; i < matrixColumnsNumber; i++) {
        const column = addColumn();
        worldContainer.appendChild(column);
        for (let j = 0; j < matrixRowsNumber; j++) {
            const cell = addCell();
            cell.classList.add(getClassName(WorldArray[j][i]));
            // cell.innerText = `${j},${i}`
            //addEventListener
            column.appendChild(cell);
            handleCell(cell, WorldArray[j][i]);
        }

    }
}

const addColumn = () => {
    const column = document.createElement("div");
    column.className = "column"
    return column;
}

const addCell = () => {
    const cell = document.createElement("div")
    cell.className = "cell"
    return cell;
}

const handleCell = (cell, number) => {

    switch (number) {
        // for cutting tree
        case 3:
        case 4:
            cell.addEventListener("click", axeCellClickHandler);
            break;
        //for mining rocks
        case 5:
            cell.addEventListener("click", pickaxeCellClickHandler);
            break;
        //for digging dirt
        case 6:
            cell.addEventListener("click", shovelCellClickHandler);
            break;
        default:
            break;
    }
}

// let axeButtonClicked = false
// let pickaxeButtonClicked = false
// let shovelButtonClicked = false
// let inventoryButtonClicked = false
function removeColors(element){
    if (element.classList.contains("green-color")) {
        element.classList.remove("green-color")
    } 
    if (element.classList.contains("wood-color")) {
        element.classList.remove("wood-color")
    } 
    if (element.classList.contains("gray-color")) {
        element.classList.remove("gray-color")
    } 
    if (element.classList.contains("sand-color")) {
        element.classList.remove("sand-color")
    } 
}


const axeCellClickHandler = (event) => {
    if (axeButtonClicked) {
        if (event.target.classList.contains("green-color")) {
            event.target.classList.remove("green-color")
            lastTileRemoved = "green-color";
            removeColors(lastTileCell);
            lastTileCell.classList.add("green-color")

        } else if (event.target.classList.contains("wood-color")) {
            event.target.classList.remove("wood-color")
            lastTileRemoved = "wood-color";
            removeColors(lastTileCell);
            lastTileCell.classList.add("wood-color")

        }
        event.target.classList.add("skyblue-color")
    }
    console.log(`lastTileRemoved=${lastTileRemoved}`)
}

const pickaxeCellClickHandler = (event) => {
    if (pickaxeButtonClicked) {
        event.target.classList.remove("gray-color")
        lastTileRemoved = "gray-color";
        removeColors(lastTileCell);
        lastTileCell.classList.add("gray-color")
        event.target.classList.add("skyblue-color")
    }
    console.log(`lastTileRemoved=${lastTileRemoved}`)

}

const shovelCellClickHandler = (event) => {
    if (shovelButtonClicked) {
        event.target.classList.remove("sand-color")
        lastTileRemoved = "sand-color";
        removeColors(lastTileCell);
        lastTileCell.classList.add("sand-color")
        event.target.classList.add("skyblue-color")
    }
    console.log(`lastTileRemoved=${lastTileRemoved}`)

}

const inventoryCellClickHandler = (event) => {

}




// const cellClickHandler = (event) =>{
//     if(event.target.classList.contains("white-color") || selectedColor === "white-color"){
//         event.target.className = "cell"
//         event.target.classList.add(selectedColor)
//     }
// }

initGame();

const axeButton = document.querySelector("#axe")
const pickaxeButton = document.querySelector("#pickaxe")
const shovelButton = document.querySelector("#shovel")
const inventoryButton = document.querySelector("#inventory")
const resetButton = document.querySelector("#reset")
const lastTileCell = document.querySelector("#last-tile-removed")


let axeButtonClicked = false
let pickaxeButtonClicked = false
let shovelButtonClicked = false
let inventoryButtonClicked = false
let resetButtonClicked = false
const clickedButtonArray = [false, false, false, false];
let lastTileRemoved = "";

function setPreviousClicked() {
    let previousIndex;
    for (let index = 0; index < 4; index++) {
        if (clickedButtonArray[index]) {
            previousIndex = index;
        }
    }
    clickedButtonArray[previousIndex] = false;
    switch (previousIndex) {
        case 0:
            axeButtonClicked = false;
            axeButton.classList.remove("chosen-btn");
            break;
        case 1:
            pickaxeButtonClicked = false;
            pickaxeButton.classList.remove("chosen-btn");
            break;
        case 2:
            shovelButtonClicked = false;
            shovelButton.classList.remove("chosen-btn");
            break;
        case 3:
            inventoryButtonClicked = false;
            inventoryButton.classList.remove("chosen-btn");
            break;
        default:
            break;
    }
}


axeButton.addEventListener('click', function () {
    if (axeButtonClicked) {
        return;
    }
    setPreviousClicked();
    axeButtonClicked = true;
    clickedButtonArray[0] = true;
    // console.log(`axeButtonClicked = ${axeButtonClicked}`)
    axeButton.classList.add("chosen-btn");
})

pickaxeButton.addEventListener('click', function () {
    if (pickaxeButtonClicked) {
        return;
    }
    setPreviousClicked();
    pickaxeButtonClicked = true;
    clickedButtonArray[1] = true;
    pickaxeButton.classList.add("chosen-btn");
})

shovelButton.addEventListener('click', function () {
    if (shovelButtonClicked) {
        return;
    }
    setPreviousClicked();
    shovelButtonClicked = true;
    clickedButtonArray[2] = true;
    shovelButton.classList.add("chosen-btn");
})

inventoryButton.addEventListener('click', function () {
    if (inventoryButtonClicked) {
        return;
    }
    setPreviousClicked();
    inventoryButtonClicked = true;
    clickedButtonArray[3] = true;
    inventoryButton.classList.add("chosen-btn");
})









// function creatWorldArray() {
//     const array = [];
//     for (let i = 0; i < matrixRowsNumber; i++) {
//         array.push([]);

//         for (let j = 0; j < matrixColumnsNumber; j++) {
//             if (i <= 8) {
//                 array[i].push(1);
//             } else {
//                 array[i].push(6);
//             }

//         }
//     }
//     return array;
// }

// let res = creatWorldArray();
// console.log(res);





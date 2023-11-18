
const boardContainer = document.querySelector(".board-container");
const matrixRowsNumber = 12;
const matrixColumnsNumber= 28;
const initGame = () => {
    boardContainer.innerHTML = "";
    for (let i = 0; i < matrixColumnsNumber; i++) {
        const column = addColumn();
        boardContainer.appendChild(column)
        for (let j = 0; j < matrixRowsNumber; j++) {
            const cell = addCell()
            // console.log(`class list 1= ${cell.classList}\n`)
            if(j<=8){
                cell.classList.add('skyblue-color');
            }else{
                cell.classList.add('sand-color');
            }
            cell.innerText=`${j},${i}`
            // console.log(`class list 2= ${cell.classList}`)
            column.appendChild(cell)
        }
        
    }
}

const addColumn = () => {
    const column = document.createElement("div");
    column.className = "column"
    return column;
}

const addCell = () =>{
    const cell = document.createElement("div")
    cell.className = "cell"
    return cell;
}

initGame();



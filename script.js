const container = document.getElementById('container');


function createGrid(gridSize){
  for(let i = 0; i < gridSize; i++){
    const createColumn = document.createElement('div');
    createColumn.className = 'gridColumn';
    container.appendChild(createColumn);
    for(let i = 0; i < gridSize; i++){
        const createRow = document.createElement('div');
        createRow.className = 'gridRow';
        createColumn.appendChild(createRow);
    }    
}   
}

function colorGrid(){
    getSquare = document.querySelectorAll('.gridRow');
    getSquare.forEach(square => {
        square.addEventListener('mouseover',()=>{
            square.style.backgroundColor = 'black';
        })
    });
}



createGrid(16);
colorGrid();
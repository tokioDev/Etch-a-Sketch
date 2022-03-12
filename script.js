const container = document.getElementById('container');
let toggle = false;

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
    colorSquares();
}
createGrid(16);
colorGrid();


function colorSquares(){
    getSquare = document.querySelectorAll('.gridRow');
        getSquare.forEach(square => {
            function styleSquare(){
                square.style.backgroundColor = 'black'
            }
            
                container.addEventListener('mousedown',()=>{
                    toggle = true;
                    if(toggle === true){
            square.addEventListener('mouseover',styleSquare);
                    }
        });
    
            container.addEventListener('mouseup',()=>{
                toggle = false
                if(toggle === false){
            square.removeEventListener('mouseover',styleSquare);
                }
        })
        
        });
    
    }
    


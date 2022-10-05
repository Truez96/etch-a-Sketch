let container = document.querySelector('.container');
let startOverButton = document.querySelector('.startOverButton');
let gridSizeButton = document.querySelector('.gridSizeButton');
let colorButton = document.querySelector('.colorButton');
let pencolor = document.querySelector('#pencolor');
color = '#B0E0E6';
let size = 16;

function userColorSelection(event) {
    color = event.target.value;
}

pencolor.addEventListener('change', userColorSelection, false);
pencolor.addEventListener('input', userColorSelection, false);

function createGrid(chosenSize){
    size = chosenSize; 
    for(i=0; i<chosenSize; i++){
        for(j=0; j<chosenSize; j++){
            let grid = document.createElement('div');
            grid.className = 'grid';
            container.appendChild(grid);
            grid.style.height = `${600/size}px`;
            grid.style.width =  `${600/size}px`;
            grid.style.backgroundColor = 'white';
            grid.style.outline = 'solid Black';
            
            grid.onmouseover = () => {
                grid.style.backgroundColor = color;
                } 

        }
    }
    
}
function clear(){ 
    for(i=0; i<size; i++){
        for(j=0; j<size; j++){
            container.removeChild(document.querySelector('.grid'));
        }
    }
}
gridSizeButton.addEventListener('click', ()=>{
    let userinput = prompt("Please enter the number of squares per side for the new grid");
    while(userinput>100){
           window.alert("The limit size is 100. Please choose lower size")
           userinput = prompt("Please enter the number of squares per side for the new grid")
    }
    clear();
    createGrid(userinput);
    })

function startOver(){
    if(container.hasChildNodes){
        clear();
        createGrid(size);
    }
        
    
}

startOverButton.addEventListener('click', ()=>startOver());

function defaultPage(){
    createGrid(size);
}

defaultPage();



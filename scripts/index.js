var gridSize = 16;
var gridModel = 'auto '.repeat(gridSize);
const container = document.querySelector('.container');
container.setAttribute('style', `grid-template-columns:${gridModel}; grid-template-rows:${gridModel};`)

createGrid();

function createGrid(){
for(var i = 1; i <= gridSize; i++)
{
  for(var j = 0; j < gridSize; j++)
    {
	var grids = document.createElement('div');

 

grids.setAttribute("class", "grids");



  grids.addEventListener('mouseover',
    (e) => {e.target.style.backgroundColor = 'black';
    });

    container.appendChild(grids);
    }
}
} //end of function createGrid
function cls()
{
	while(container.firstChild){
												container.removeChild(container.firstChild)
	}
	createGrid();

};

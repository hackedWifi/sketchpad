//function createDivs(){
  var gridSize = 16;
  var e = document.getElementsByClassName('main');
  for(var i = 1; i <= gridSize * gridSize; i++){
    var row = document.createElement('div');
    row.className = 'row';
    // for (var j = 1; j <= gridSize; j++) {
    //   var cell = document.createElement('div');
    //   cell.className = 'grid';
    //   row.appendChild(cell);
      row.addEventListener('mouseover',
        (e) => {e.target.style.backgroundColor = 'black';
    });

  e[0].appendChild(row);
  }


//}

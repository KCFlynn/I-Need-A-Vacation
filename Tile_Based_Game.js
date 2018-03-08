
var stage = document.querySelector('#stage');

var map =[
[1, 0, 1, 1, 0, 1, 1, 0],
[1, 0, 1, 1, 0, 1, 1, 0],
[1, 0, 1, 1, 0, 1, 1, 0],
[1, 0, 1, 1, 0, 1, 1, 0],
[1, 0, 1, 1, 0, 1, 1, 0],
[1, 0, 1, 1, 0, 1, 1, 0],
[1, 0, 1, 1, 0, 1, 1, 0],
[1, 0, 1, 1, 0, 1, 1, 0]
];

const WATER = 0;
const ISLAND = 1;
const PIRATE = 2;
const HOME = 3;

const SIZE = 64;
   
const ROWS = map.length;
const COLUMNS = map[0].length;

var stage = document.querySelector('#stage');
var output = document.querySelector('#output');

function render()
{
    if(stage.hasChildNodes())
        {
            for(var i = 0; i < ROWS * COLUMNS; i++)
                {
                    stage.removeChild(stage.firstChild);
                }
        }


for(var row = 0; row < ROWS; row++)
{
 for(var column = 0; column < COLUMNS; column++)
 {
     var cell = document.createElement('img');
     
     cell.setAttribute('class', 'cell');
     stage.appendChild(cell);
     
     switch(map[row][column])
     {
         case WATER: 
         cell.src = "water.png";
         break;
         
         case ISLAND:
         cell.src = "island.png";
         break;
         
         case PIRATE:
         cell.src = "pirate.png";
         break;
         
         case HOME:
         cell.src = "castle.png";
         break;
     }
     
     
     cell.style.top = row * SIZE  + 'px';
     cell.style.left = column * SIZE  + 'px';
   }
 } 
}

var cell = document.createElement('ing');
cell.setAttribute('class', 'cell');
stage.appendChild(cell);




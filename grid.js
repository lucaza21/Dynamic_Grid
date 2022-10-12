let position = 1; // The starting position of the grid
const gridSize = 100; // The total number of the grid cells

function createGrid() {
  // Should create a new Div based on the gridSize variable value and append these divs to the element with id "target"
var elements = document.getElementById("target");

  var count = 1;
  for(var i = 0; i < 100; i++){
    var div = document.createElement("div");
    let divElementText = document.createTextNode('Dynamically created div element '+ count)
    console.log(count);
    div.id = 'n' + count;
    div.appendChild(divElementText)
    console.log(elements.length);
    elements.appendChild(div);
    count++;
    }
}
var count2 = 1;
var timer = null;

function move() {
  // Should increment the position variable by 1 each 100ms taking into consideration the gridSize variable value
  // This function should make use of the toggle function below to change the CSS class on a specific div element
  timer = setInterval(() => {
    if (count2 >= 101){
      clearTimeout(timer);
    } else {
    var letter2 = 'n'+count2;
    console.log('valor actual del contador' + letter2);
    const element = document.getElementById(letter2);
    element.classList.add('on');
    toggle(count2);
    count2++;
    }
            },90);
}

function toggle(position) {
  // Takes a position parameter referencing a grid cell and sets the class name of that cell (or div) to the class 'on'
  // The CSS class "on" is defined in the styles.css file
  // If a position of less than 1 is passed into the function, return 0 as the grid positions only go from 1 to 100
  if(position <=0 ){
      return 0;
  }if (position > 1){
      console.log('contador dentro del toggle' + position);
      var letter3 = 'n'+ (position-1);
      const ele = document.getElementById(letter3);
      ele.classList.toggle('on');
  } 
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { createGrid, move, toggle };
}
// Select color input
// Select size input
var h=null;
var w = null;
var color = null;
// When size is submitted by the user, call makeGrid()
const form = document.getElementById('sizePicker');
//console.log(inputHeight+ "  "+inputWidth);
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    h = document.getElementById("inputHeight").value;
    w = document.getElementById('inputWidth').value;
    color = document.getElementById('colorPicker').value;
    makeGrid();
});
function makeGrid() {
// Your code goes here!
//let container = document.createElement("div");
let tab = document.getElementById("pixelCanvas");
let k=h+1;
for(let i=1;i<=h;i++){
    let row = document.createElement('tr');
    row.id=i;
    tab.appendChild(row);
    let rows = document.getElementById(i);
    //console.log(rows.outerHTML());
for(let j=1;j<=w;j++){
   let columnCell = document.createElement('td');
    columnCell.id = k;
    rows.appendChild(cell);
    let cellId = document.getElementById(k);
    cellId.addEventListener('click',(e)=>{
        e.preventDefault();
        cellId.style.backgroundColor=color;
    });
    k++;
}
}
}

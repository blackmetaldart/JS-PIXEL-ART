
//THIS ADDS AN EVENT LISTENER TO THE SUBMIT BUTTON TO CHANGE THE BRUSH COLOR ON CLICK
document.addEventListener('click', changeBrush);

//THIS FUNCTION CHANGES THE BRUSH COLOR TO THE VALID INPUT ON SUBMISSION
function changeBrush(e) {
  e.preventDefault();
  const brushColor = document.querySelector('input').value;
  document.querySelector('.brush').style.background = brushColor;
}

//THIS CREATES THE PIXEL-CANVAS AT THE BOTTOM OF THE SCREEN
//IT ALSO ADDS EVENT LISTENERS SO THAT THE WHEN THE CURSOR MOVES OVER OVER A SQUARE THE COLOR CHANGES
  for (let i = 0; i < 8000; i++) {
    var div = document.createElement('div');
    div.setAttribute('class', 'square');
    div.addEventListener('mouseover', changeSquare);
    document.body.appendChild(div);
}

//THIS IS THE FUNCTION THAT THE EVENT LISTENER USES TO CHANGE THE CANVAS COLOR ON MOUSE OVER
function changeSquare(e){
  e.preventDefault();
  this.style.background = document.querySelector('input').value;
}

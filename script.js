
document.addEventListener('click', changeBrush);

function changeBrush(e) {
  e.preventDefault();
  const brushColor = document.querySelector('input').value;
  document.querySelector('.brush').style.background = brushColor;
}


  for (let i = 0; i < 8000; i++) {
    var div = document.createElement('div');
    div.setAttribute('class', 'square');
    div.addEventListener('mouseover', changeSquare);
    document.body.appendChild(div);
}

function changeSquare(e){
  e.preventDefault();
  this.style.background = document.querySelector('input').value;
}

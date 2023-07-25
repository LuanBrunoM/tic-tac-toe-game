document.addEventListener('DOMContentLoaded', ()=>{

  const squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.addEventListener('click', handleClick);
  })
});

function handleClick(event){
  let square = event.target;
  let position = square.id;

  if(handleMove(position)){
    setTimeout(() => {
      alert("Fim do Jogo - O Vencedor foi o jogador " + (playerTime + 1));
    }, 10);
  }
  updateSquares(position);
}

function updateSquares(position){
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`
}

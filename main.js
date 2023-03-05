import {squareSize, pieces, piecePositions} from './chessboard-setup.js';

const board = document.createElement('div');
board.className = 'board';

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    const square = document.createElement('div');
    square.className = `square row-${i} col-${j}`;

    // apply color based on row and column index
    if ((i + j) % 2 === 0) {
      square.classList.add('light');
    } else {
      square.classList.add('dark');
    }

    board.appendChild(square);
  }
}

document.body.appendChild(board);

canvas.id = 'chessboard';
canvas.width = 400;
canvas.height = 400;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

for (const piece in pieces) {
  const img = new Image();
  img.src = pieces[piece];
  img.onload = function() {
    const position = piece

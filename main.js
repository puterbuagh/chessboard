import {squareSize, pieces, piecePositions, highlightSquare} from './chessboard-setup.js';

const board = document.createElement('div');
board.className = 'board';

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    const square = document.createElement('div');
    square.className = `square row-${i} col-${j}`;

    // apply color based on row and column index
    if (((i % 2 === 0) && (j % 2 === 0)) || ((i % 2 === 1) && (j % 2 === 1))) {
      square.classList.add('light');
    } else {
      square.classList.add('dark');
    }

    square.addEventListener('click', function() {
      handleUserClick(i, j);
    });

    board.appendChild(square);
  }
}

document.body.appendChild(board);

const canvas = document.createElement('canvas');
canvas.id = 'chessboard';
canvas.width = 400;
canvas.height = 400;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

function initializeChessPieces() {
  for (const piece in piecePositions) {
    const img = new Image();
    img.src = pieces[piece];
    img.onload = function() {
      const position = piecePositions[piece];
      ctx.drawImage(img, position.x, position.y, squareSize, squareSize);
    }
  }
}

function redrawBoard(canvas) {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const piece in piecePositions) {
    const img = new Image();
    img.src = pieces[piece];
    img.onload = function () {
      const position = piecePositions[piece];
      ctx.drawImage(img, position.x, position.y, squareSize, squareSize);
    };
  }
}

initializeChessPieces();

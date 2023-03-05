const pieces = {
  wK: "/img/pieces/wK.png",
  wQ: "/img/pieces/wQ.png",
  wR: "/img/pieces/wR.png",
  wB: "/img/pieces/wB.png",
  wN: "/img/pieces/wN.png",
  wP: "/img/pieces/wP.png",
  bK: "/img/pieces/bK.png",
  bQ: "/img/pieces/bQ.png",
  bR: "/img/pieces/bR.png",
  bB: "/img/pieces/bB.png",
  bN: "/img/pieces/bN.png",
  bP: "/img/pieces/bP.png",
};

const pieceWidth = 50;
const pieceHeight = 50;

const piecePositions = {
  wK: {x: 0, y: 0},
  wQ: {x: pieceWidth, y: 0},
  wR: {x: pieceWidth * 2, y: 0},
  wB: {x: pieceWidth * 3, y: 0},
  wN: {x: pieceWidth * 4, y: 0},
  wP: {x: pieceWidth * 5, y: 0},
  bK: {x: 0, y: pieceHeight},
  bQ: {x: pieceWidth, y: pieceHeight},
  bR: {x: pieceWidth * 2, y: pieceHeight},
  bB: {x: pieceWidth * 3, y: pieceHeight},
  bN: {x: pieceWidth * 4, y: pieceHeight},
  bP: {x: pieceWidth * 5, y: pieceHeight},
};

for (const piece in pieces) {
  const img = new Image();
  img.src = pieces[piece];
  img.onload = function() {
    const position = piecePositions[piece];
    ctx.drawImage(img, position.x, position.y, pieceWidth, pieceHeight);
  }

}

const canvas = document.getElementById('chessboard');
canvas.addEventListener('click', handleClick);

function handleClick(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  const row = Math.floor(y / squareSize);
  const col = Math.floor(x / squareSize);

  // do something with the row and column
}

function highlightSquare(row, col) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';
  ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);
}

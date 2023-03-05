export const squareSize = 50;

export const pieces = {
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

export const pieceWidth = 50;
export const pieceHeight = 50;

export const piecePositions = {
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

export function highlightSquare(row, col, color) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);
}


export const squareSize = 50;

export const pieces = {
  wK: "img/pieces/wK.png",
wQ: "img/pieces/wQ.png",
wR: "img/pieces/wR.png",
wB: "img/pieces/wB.png",
wN: "img/pieces/wN.png",
wP: "img/pieces/wP.png",
bK: "img/pieces/bK.png",
bQ: "img/pieces/bQ.png",
bR: "img/pieces/bR.png",
bB: "img/pieces/bB.png",
bN: "img/pieces/bN.png",
bP: "img/pieces/bP.png",

};

export const pieceWidth = 50;
export const pieceHeight = 50;

export const piecePositions = {
  wK: {x: pieceWidth * 4, y: pieceHeight * 7},
  wQ: {x: pieceWidth * 3, y: pieceHeight * 7},
  wR: {x: pieceWidth * 0, y: pieceHeight * 7},
  wR: {x: pieceWidth * 7, y: pieceHeight * 7},
  wB: {x: pieceWidth * 2, y: pieceHeight * 7},
  wB: {x: pieceWidth * 5, y: pieceHeight * 7},
  wN: {x: pieceWidth * 1, y: pieceHeight * 7},
  wN: {x: pieceWidth * 6, y: pieceHeight * 7},
  wP: {x: pieceWidth * 0, y: pieceHeight * 6},
  wP: {x: pieceWidth * 1, y: pieceHeight * 6},
  wP: {x: pieceWidth * 2, y: pieceHeight * 6},
  wP: {x: pieceWidth * 3, y: pieceHeight * 6},
  wP: {x: pieceWidth * 4, y: pieceHeight * 6},
  wP: {x: pieceWidth * 5, y: pieceHeight * 6},
  wP: {x: pieceWidth * 6, y: pieceHeight * 6},
  wP: {x: pieceWidth * 7, y: pieceHeight * 6},
  bK: {x: pieceWidth * 4, y: pieceHeight * 0},
  bQ: {x: pieceWidth * 3, y: pieceHeight * 0},
  bR: {x: pieceWidth * 0, y: pieceHeight * 0},
  bR: {x: pieceWidth * 7, y: pieceHeight * 0},
  bB: {x: pieceWidth * 2, y: pieceHeight * 0},
  bB: {x: pieceWidth * 5, y: pieceHeight * 0},
  bN: {x: pieceWidth * 1, y: pieceHeight * 0},
  bN: {x: pieceWidth * 6, y: pieceHeight * 0},
  bP: {x: pieceWidth * 0, y: pieceHeight * 1},  
  bP: {x: pieceWidth * 1, y: pieceHeight * 1},
  bP: {x: pieceWidth * 2, y: pieceHeight * 1},  
  bP: {x: pieceWidth * 3, y: pieceHeight * 1},
  bP: {x: pieceWidth * 4, y: pieceHeight * 1},  
  bP: {x: pieceWidth * 5, y: pieceHeight * 1},
  bP: {x: pieceWidth * 6, y: pieceHeight * 1},  
  bP: {x: pieceWidth * 7, y: pieceHeight * 1},
};


export function highlightSquare(row, col, color, canvas) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);
}

export function drawPieces(ctx) {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = getPieceAtPosition(row, col);
      if (piece) {
        const image = pieceImages[piece];
        const x = col * squareSize;
        const y = row * squareSize;
        ctx.drawImage(image, x, y, squareSize, squareSize);
      }
    }
  }
}


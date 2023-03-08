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
  wR1: {x: pieceWidth * 0, y: pieceHeight * 7},
  wR2: {x: pieceWidth * 7, y: pieceHeight * 7},
  wB1: {x: pieceWidth * 2, y: pieceHeight * 7},
  wB2: {x: pieceWidth * 5, y: pieceHeight * 7},
  wN1: {x: pieceWidth * 1, y: pieceHeight * 7},
  wN2: {x: pieceWidth * 6, y: pieceHeight * 7},
  wP1: {x: pieceWidth * 0, y: pieceHeight * 6},
  wP2: {x: pieceWidth * 1, y: pieceHeight * 6},
  wP3: {x: pieceWidth * 2, y: pieceHeight * 6},
  wP4: {x: pieceWidth * 3, y: pieceHeight * 6},
  wP5: {x: pieceWidth * 4, y: pieceHeight * 6},
  wP6: {x: pieceWidth * 5, y: pieceHeight * 6},
  wP7: {x: pieceWidth * 6, y: pieceHeight * 6},
  wP8: {x: pieceWidth * 7, y: pieceHeight * 6},
  bK: {x: pieceWidth * 4, y: pieceHeight * 0},
  bQ: {x: pieceWidth * 3, y: pieceHeight * 0},
  bR1: {x: pieceWidth * 0, y: pieceHeight * 0},
  bR2: {x: pieceWidth * 7, y: pieceHeight * 0},
  bB1: {x: pieceWidth * 2, y: pieceHeight * 0},
  bB2: {x: pieceWidth * 5, y: pieceHeight * 0},
  bN1: {x: pieceWidth * 1, y: pieceHeight * 0},
  bN2: {x: pieceWidth * 6, y: pieceHeight * 0},
  bP1: {x: pieceWidth * 0, y: pieceHeight * 1},  
  bP2: {x: pieceWidth * 1, y: pieceHeight * 1},
  bP3: {x: pieceWidth * 2, y: pieceHeight * 1},  
  bP4: {x: pieceWidth * 3, y: pieceHeight * 1},
  bP5: {x: pieceWidth * 4, y: pieceHeight * 1},  
  bP6: {x: pieceWidth * 5, y: pieceHeight * 1},
  bP7: {x: pieceWidth * 6, y: pieceHeight * 1},  
  bP8: {x: pieceWidth * 7, y: pieceHeight * 1},
};
export function getPieceAtPosition(row, col) {
  for (const piece in piecePositions) {
    const position = piecePositions[piece];
    if (position.x === col * pieceWidth && position.y === row * pieceHeight) {
      return piece;
    }
  }
  return null;
}


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


export function getPieceAtPosition(row, col) {
  for (const piece in piecePositions) {
    const position = piecePositions[piece];
    if (position.x === col * squareSize && position.y === row * squareSize) {
      return piece;
    }
  }
  return null;
  
  
}


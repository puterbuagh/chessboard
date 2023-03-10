export const squareSize = 50;

export function getPieceImage(piece) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      resolve(image);
    };
    image.onerror = (error) => {
      reject(error);
    };
    switch (piece) {
      case "wK":
        image.src = whiteKingImg;
        break;
      case "wQ":
        image.src = whiteQueenImg;
        break;
      case "wR1":
      case "wR2":
        image.src = whiteRookImg;
        break;
      case "wB1":
      case "wB2":
        image.src = whiteBishopImg;
        break;
      case "wN1":
      case "wN2":
        image.src = whiteKnightImg;
        break;
      case "wP1":
      case "wP2":
      case "wP3":
      case "wP4":
      case "wP5":
      case "wP6":
      case "wP7":
      case "wP8":
        image.src = whitePawnImg;
        break;
      case "bK":
        image.src = blackKingImg;
        break;
      case "bQ":
        image.src = blackQueenImg;
        break;
      case "bR1":
      case "bR2":
        image.src = blackRookImg;
        break;
      case "bB1":
      case "bB2":
        image.src = blackBishopImg;
        break;
      case "bN1":
      case "bN2":
        image.src = blackKnightImg;
        break;
      case "bP1":
      case "bP2":
      case "bP3":
      case "bP4":
      case "bP5":
      case "bP6":
      case "bP7":
      case "bP8":
        image.src = blackPawnImg;
        break;
      default:
        reject(new Error(`Invalid piece name: ${piece}`));
    }
  });
}

export async function initializeChessPieces() {
  console.log(`pieceWidth: ${pieceWidth}, pieceHeight: ${pieceHeight}`);
  console.log(piecePositions);

  const images = {};
  const promises = Object.keys(piecePositions).map((piece) => {
    return getPieceImage(piece).then((image) => {
      images[piece] = image;
    });
  });
  await Promise.all(promises);

  function drawPieces(ctx) {
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const piece = getPieceAtPosition(row, col);
        if (piece) {
          const image = images[piece];
          const x = col * pieceWidth;
          const y = row * pieceHeight;
          ctx.drawImage(image, x, y, pieceWidth, pieceHeight);
        }
      }
    }
  }

  return drawPieces;
}

const whiteKingImg = 'img/pieces/wK.png';
const whiteQueenImg = 'img/pieces/wQ.png';
const whiteRookImg = 'img/pieces/wR.png';
const whiteBishopImg = 'img/pieces/wB.png';
const whiteKnightImg = 'img/pieces/wN.png';
const whitePawnImg = 'img/pieces/wP.png';
const blackKingImg = 'img/pieces/bK.png';
const blackQueenImg = 'img/pieces/bQ.png';
const blackRookImg = 'img/pieces/bR.png';
const blackBishopImg = 'img/pieces/bB.png';
const blackKnightImg = 'img/pieces/bN.png';
const blackPawnImg = 'img/pieces/bP.png';

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

function drawPieces(ctx) {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = getPieceAtPosition(row, col);
      if (piece) {
        const image = new Image();
        image.src = pieces[piece];
        const x = col * pieceWidth;
        const y = row * pieceHeight;
        ctx.drawImage(image, x, y, pieceWidth, pieceHeight);
      }
    }
  }
}


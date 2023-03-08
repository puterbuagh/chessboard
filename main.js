import { squareSize, pieces, piecePositions, highlightSquare, drawPieces, pieceWidth, pieceHeight, getPieceAtPosition, initializeChessPieces } from './chessboard-setup.js';

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

function initializeChessPieces() {
  console.log(`pieceWidth: ${pieceWidth}, pieceHeight: ${pieceHeight}`);
  console.log(piecePositions);

  function getPieceImage(piece) {
    switch (piece) {
      case "wK":
        return whiteKingImg;
      case "wQ":
        return whiteQueenImg;
      case "wR1":
      case "wR2":
        return whiteRookImg;
      case "wB1":
      case "wB2":
        return whiteBishopImg;
      case "wN1":
      case "wN2":
        return whiteKnightImg;
      case "wP1":
      case "wP2":
      case "wP3":
      case "wP4":
      case "wP5":
      case "wP6":
      case "wP7":
      case "wP8":
        return whitePawnImg;
      case "bK":
        return blackKingImg;
      case "bQ":
        return blackQueenImg;
      case "bR1":
      case "bR2":
        return blackRookImg;
      case "bB1":
      case "bB2":
        return blackBishopImg;
      case "bN1":
      case "bN2":
        return blackKnightImg;
      case "bP1":
      case "bP2":
      case "bP3":
      case "bP4":
      case "bP5":
      case "bP6":
      case "bP7":
      case "bP8":
        return blackPawnImg;
      default:
        throw new Error(`Invalid piece name: ${piece}`);
    }
  }

  for (const piece in piecePositions) {
    const position = piecePositions[piece];
    console.log(`Piece: ${piece}, x: ${position.x}, y: ${position.y}`);
    const img = new Image();
    img.src = getPieceImage(piece);
    img.onload = function() {
      ctx.drawImage(img, position.x, position.y, squareSize, squareSize);
      drawPieces(ctx);
    }
  }
}


initializeChessPieces();
// Add event listener to the canvas element
canvas.addEventListener('click', handleUserClick);

// Define variables for tracking selected piece
let selectedPiece = null;
let selectedRow = null;
let selectedCol = null;

function handleUserClick(event) {
  const row = Math.floor(event.offsetY / squareSize);
  const col = Math.floor(event.offsetX / squareSize);
  const clickedPiece = getPieceAtPosition(row, col);
  if (selectedPiece === null) {
    if (clickedPiece) {
      selectedPiece = clickedPiece;
      selectedRow = row;
      selectedCol = col;
      highlightSquare(row, col, 'rgba(240, 217, 181, 0.5)', canvas);
    }
  } else {
    const isValidMove = checkIfValidMove(selectedPiece, selectedRow, selectedCol, row, col);
    if (isValidMove) {
      piecePositions[selectedPiece] = { x: col * squareSize, y: row * squareSize };
      redrawBoard(canvas);
    }
    selectedPiece = null;
    selectedRow = null;
    selectedCol = null;
  }
}

function checkIfValidMove(piece, fromRow, fromCol, toRow, toCol) {
  // Add your logic to check if the move is valid
  return true;
}



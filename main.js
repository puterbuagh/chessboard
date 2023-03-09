import { squareSize, pieces, piecePositions, highlightSquare, drawPieces, pieceWidth, pieceHeight, getPieceAtPosition, initializeChessPieces, getPieceImage } from './chessboard-setup.js';

const canvas = document.createElement('canvas');
canvas.id = 'chessboard';
canvas.width = 400;
canvas.height = 400;
document.body.appendChild(canvas);

async function startGame() {
  const ctx = canvas.getContext('2d');
  const drawPieces = await initializeChessPieces();
  drawPieces(ctx);

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

for (const piece in piecePositions) {
  const position = piecePositions[piece];
  console.log(`Piece: ${piece}, x: ${position.x}, y: ${position.y}`);
  getPieceImage(piece).then((image) => {
    const img = new Image();
    img.onload = function() {
      ctx.drawImage(img, position.x, position.y, squareSize, squareSize);
      drawPieces(ctx);
    }
    img.src = image.src;
  });
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
  } 
  
  else {
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
};}

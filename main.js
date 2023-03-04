const board = document.createElement('div');
board.className = 'board';

for (let i = 0; i < 64; i++) {
  const square = document.createElement('div');
  square.className = 'square';
  if (i % 2 === 0) {
    square.classList.add('light');
  } else {
    square.classList.add('dark');
  }
  board.appendChild(square);
}

document.body.appendChild(board);

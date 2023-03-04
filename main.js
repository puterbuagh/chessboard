const board = document.createElement('div');
board.className = 'board';

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    const square = document.createElement('div');
    square.className = 'square';

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

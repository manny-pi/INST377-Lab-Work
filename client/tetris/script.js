// Fires when the initial HTML document has been completely loaded, and parsed
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  const squares = Array.from(document.querySelectorAll('.grid div'));
  const ScoreDisplay = document.querySelector('#score');
  const StartButton = document.querySelector('#start-button');
  const width = 10;

  // The Tetrominoes
  const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 2]
  ];

  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1]
  ];

  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
  ];

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
  ];

  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
  ];

  const allTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];
  let currentPosition = 4;
  let currentRotation = 0;

  // Randomly select a tetromino and its first rotation
  let random = Math.floor(Math.random() * allTetrominoes.length);
  let current = allTetrominoes[0][0];

  // draw the Tetromino
  function draw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.add('tetromino');
    });
  }

  // undraw the Tetromino
  function undraw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.remove('tetromino');
    });
  }

  // make the tetromino move down every second
  timerId = setInterval(moveDown, 1000);

  // move down functio
  function moveDown() {
    undraw();
    currentPosition += width;
    draw();
  }
});
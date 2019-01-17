// Setting up canvas environment
var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');
// Game environment
var width = canvas.width;
var height = canvas.height;
const GRID = 10;
const TILE_SIZE = 50;

// Create a player
var player = new Character(0, 0, {
  left: 'starter-code/images/character-left.png',
  right: 'starter-code/images/character-right.png',
  up: 'starter-code/images/character-up.png',
  down: 'starter-code/images/character-down.png'
});

// Create treasure
var treasure = new Treasure(GRID, GRID, 'starter-code/images/treasure.png');

// Initialization
setTimeout(function() {
  render();
}, 500);

// Game start
document.onkeydown = function(e) {
  e.preventDefault(); // Stop the default behaviour (moving the screen)
  // update player status
  update(e.keyCode);

  // Check if the player found the treasure
  if (player.row === treasure.row && player.col === treasure.col) {
    var steps = document.getElementById('steps');
    steps.innerHTML = `You have moved ${
      player.step
    } steps until you found the treasure!`;

    // draw everything
    render();
    drawTreasure();
  } else {
    render();
  }
};

/**************************************
 * Update Canva
 **************************************/
function update(keyCode) {
  switch (keyCode) {
    case 37:
      if (player.col !== 0) {
        player.moveLeft();
      }
      break;
    case 38:
      if (player.row !== 0) {
        player.moveUp();
      }
      break;
    case 39:
      if (player.col !== GRID - 1) {
        player.moveRight();
      }
      break;
    case 40:
      if (player.row !== GRID - 1) {
        player.moveDown();
      }
      break;
  }
}

/**************************************
 * Draw Canva
 **************************************/
// render canva
function render() {
  context.clearRect(0, 0, width, height);
  drawGrid();
  drawPlayer();
}

// draw grid
function drawGrid() {
  context.strokeStyle = 'green';

  // draw rows
  for (var i = 0; i <= GRID; i++) {
    context.beginPath();
    context.moveTo(0, i * TILE_SIZE);
    context.lineTo(width, i * 50);
    context.closePath();
    context.stroke();
  }
  for (var i = 0; i <= GRID; i++) {
    context.beginPath();
    context.moveTo(i * TILE_SIZE, 0);
    context.lineTo(i * TILE_SIZE, height);
    context.closePath();
    context.stroke();
  }
}

// draw player
function drawPlayer() {
  context.drawImage(
    player.images[player.orientation],
    player.col * TILE_SIZE,
    player.row * TILE_SIZE,
    TILE_SIZE,
    TILE_SIZE
  );
}

// draw treasure
function drawTreasure() {
  context.drawImage(
    treasure.image,
    treasure.col * TILE_SIZE,
    treasure.row * TILE_SIZE,
    TILE_SIZE,
    TILE_SIZE
  );
}

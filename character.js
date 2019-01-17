class Character {
  constructor(initRow, initCol, imgPath) {
    this.row = initRow;
    this.col = initCol;
    this.orientation = 'down';
    this.images = {};
    this.step = 0;

    for (let orientation in imgPath) {
      this.images[orientation] = new Image();
      this.images[orientation].src = imgPath[orientation];
    }
  }

  moveRight() {
    this.step++;
    this.col++;
    this.orientation = 'right';
  }
  moveLeft() {
    this.step++;
    this.col--;
    this.orientation = 'left';
  }
  moveUp() {
    this.step++;
    this.row--;
    this.orientation = 'up';
  }
  moveDown() {
    this.step++;
    this.row++;
    this.orientation = 'down';
  }
}

class Treasure {
  constructor(maxRow, maxCol, img) {
    this.row = 0;
    this.col = 0;
    this.maxRow = maxRow;
    this.maxCol = maxCol;
    this.image = new Image();
    this.image.src = img;
    this.setPosition();
  }

  setPosition() {
    this.row = Math.floor(Math.random() * this.maxRow);
    this.col = Math.floor(Math.random() * this.maxCol);
  }
}

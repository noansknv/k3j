/**
 * A class to represent a 2D vector.
 **/
const GRID_SIZE = 32;

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // TODO: configure grid size
  toGrid() {
    return new Vector(Math.floor(this.x / GRID_SIZE), Math.floor(this.y / GRID_SIZE));
  }
}

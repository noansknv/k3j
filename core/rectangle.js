class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.bounds = new Bounds(this);
  }

  update() {
    this.bounds.update(this);
  }

  center() {
    return new Vector(this.x + (this.w / 2), this.y + (this.h / 2));
  }

  // Returns a new rect, offset by offsetX and offsetY
  static offset(rect, offsetX, offsetY) {
    return new Rectangle(rect.x - offsetX, rect.y - offsetY, rect.w, rect.h);
  }

  // TODO
  // fromGrid

  // TODO
  // toGrid
}

class Bounds {
  constructor(rect) {
    this.bottom = rect.y + rect.h;
    this.top = rect.y;
    this.left = rect.x;
    this.right = rect.x + rect.w;
  }

  update(rect) {
    this.bottom = rect.y + rect.h;
    this.top = rect.y;
    this.left = rect.x;
    this.right = rect.x + rect.w;
  }
}

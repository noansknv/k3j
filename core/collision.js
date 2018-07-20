class Collision {
  isRect(obj) {
    return (obj.bounds && Object.keys(obj.bounds).length === 4);
  }

  between(obj1, obj2) {
    if (!this.isRect(obj1) || !this.isRect(obj2)) return false;
    return !((obj1.bounds.bottom < obj2.bounds.top) ||
            (obj1.bounds.top > obj2.bounds.bottom) ||
            (obj1.bounds.left > obj2.bounds.right) ||
            (obj1.bounds.right < obj2.bounds.left));
  }

  faces(obj1, obj2) {
    return new Bounds(
      abs(obj1.bounds.bottom - obj2.bounds.top),
      abs(obj1.bounds.top - obj2.bounds.bottom),
      abs(obj1.bounds.right - obj2.bounds.left),
      abs(obj1.bounds.left - obj2.bounds.right)
    );
  }

  bottom(obj1, obj2) {
    let faces = this.faces(obj1, obj2);
    return (faces.top < faces.bottom && faces.top < faces.left && faces.top < faces.right);
  }

  top(obj1, obj2) {
    let faces = this.faces(obj1, obj2);
    return (faces.bottom < faces.top && faces.bottom < faces.left && faces.bottom < faces.right);
  }

  right(obj1, obj2) {
    let faces = this.faces(obj1, obj2);
    return (faces.left < faces.bottom && faces.left < faces.top && faces.left < faces.right);
  }

  left(obj1, obj2) {
    let faces = this.faces(obj1, obj2);
    return (faces.right < faces.bottom && faces.right < faces.left && faces.right < faces.top);
  }

}

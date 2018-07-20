class Group {
  constructor() {
    this.elems = [];
  }

  all() {
    return this.elems;
  }

  // Add element to the group
  add(e) {
    this.elems.push(e);
  }

  update() {
    let del = [], i, el;
    for(i = this.elems.length; i--;) {
      el = this.elems[i];

      // Update element
      if (el.hasOwnProperty('update')) el.update();
      // Mark to delete if not alive
      if (!el.alive) del.push(i);
    }

    // Delete from array
    if (del.length > 0) {
      this.elems = this.elems.filter((v, i) => {
        return del.indexOf(i) < 0;
      });
    }
  }

  // Clear group
  clear() {
    this.elems = [];
  }
}

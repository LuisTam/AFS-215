class ArrayManager {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    getArray() {
      return this.items;
    }
  
    removeItem(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  
    searchItem(item) {
      return this.items.includes(item);
    }
  }
  
  module.exports = ArrayManager;
  
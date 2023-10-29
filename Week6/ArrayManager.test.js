const chai = require('chai');
const ArrayManager = require('./ArrayManager');

const { expect } = chai;

describe('ArrayManager', () => {
  let arrayManager;

  beforeEach(() => {
    arrayManager = new ArrayManager();
  });

  it('should add an item to the array', () => {
    arrayManager.addItem(42);
    expect(arrayManager.getArray()).to.deep.equal([42]);
  });

  it('should remove a specific item from the array', () => {
    arrayManager.addItem(1);
    arrayManager.addItem(2);
    arrayManager.addItem(3);

    arrayManager.removeItem(2);
    expect(arrayManager.getArray()).to.deep.equal([1, 3]);
  });

  it('should search for a specific item in the array', () => {
    arrayManager.addItem('apple');
    arrayManager.addItem('banana');
    arrayManager.addItem('cherry');

    expect(arrayManager.searchItem('banana')).to.be.true;
    expect(arrayManager.searchItem('grape')).to.be.false;
  });

  it('should provide an error message when searching for a non-existing item', () => {
    arrayManager.addItem(1);
    arrayManager.addItem(2);
    arrayManager.addItem(3);

    expect(() => arrayManager.searchItem(4)).to.throw('Item not found');
  });
});

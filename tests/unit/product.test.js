const { addProduct, getProducts, resetProducts } = require('../../js/productService');

describe('Product Service', () => {
  beforeEach(() => {
    resetProducts();
  });

  it('should add a new product', () => {
    // Continue the unit test here
  });

  it('should not add a product with an existing id', () => {
    addProduct(1, 'Test Product', 100);
    expect(() => addProduct(1, 'Another Product', 150)).toThrow('Product already exists');
  });

  it('should get all products', () => {
    // Continue the unit test here
  });
});

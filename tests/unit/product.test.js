const { addProduct, getProducts, resetProducts } = require('../../js/productService');

describe('Product Service', () => {
  beforeEach(() => {
    resetProducts();
  });

  it('should add a new product', () => {
    const message = addProduct(1, 'Test Product', 100);
    expect(message).toEqual('Product added');
  });

  it('should not add a product with an existing id', () => {
    addProduct(1, 'Test Product', 100);
    expect(() => addProduct(1, 'Another Product', 150)).toThrow('Product already exists');
  });

  it('should get all products', () => {
    addProduct(1, 'Test Product', 100);
    addProduct(2, 'Another Product', 150);
    const products = getProducts();
    expect(products).toEqual([
      { id: 1, name: 'Test Product', price: 100 },
      { id: 2, name: 'Another Product', price: 150 },
    ]);
  });
});

let products = [];

const addProduct = (id, name, price) => {
  if (products.find(product => product.id === id)) {
    throw new Error('Product already exists');
  }
  products.push({ id, name, price });
  return 'Product added';
};

const getProducts = () => {
  return products;
};

const resetProducts = () => {
  products = [];
};

module.exports = { addProduct, getProducts, resetProducts };

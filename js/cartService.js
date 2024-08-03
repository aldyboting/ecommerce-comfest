let cart = [];

const addItem = (product) => {
  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
};

const updateItem = (productId, quantity) => {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = quantity;
  }
};

const removeItem = (productId) => {
  cart = cart.filter(item => item.id !== productId.toString());
};

const getTotal = () => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

const getCartItems = () => {
  return cart;
};

const resetCart = () => {
  cart = [];
};

module.exports = { addItem, updateItem, removeItem, getTotal, getCartItems, resetCart };

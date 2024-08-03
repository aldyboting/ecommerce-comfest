const { addItem, updateItem, removeItem, getTotal, getCartItems, resetCart } = require('../../js/cartService');

describe('cartService', () => {
    beforeEach(() => {
        resetCart();
    });

    it('should add a product to the cart', () => {
        const product = { id: 1, name: 'Test Product', price: 100 };
        addItem(product);
        const cartItems = getCartItems();
        expect(cartItems.length).toEqual(1);
        expect(cartItems[0].quantity).toEqual(1);
    });

    it('should update product quantity in the cart', () => {
        const product = { id: 1, name: 'Test Product', price: 100 };
        addItem(product);
        updateItem(1, 5);
        const cartItems = getCartItems();
        expect(cartItems[0].quantity).toEqual(5);
    });

    it('should remove a product from the cart', () => {
        const product = { id: 1, name: 'Test Product', price: 100 };
        addItem(product);
        removeItem(1);
        const cartItems = getCartItems();
        expect(cartItems.length).toEqual(0);
    });

    it('should calculate the total price', () => {
        const product1 = { id: 1, name: 'Product 1', price: 100 };
        const product2 = { id: 2, name: 'Product 2', price: 50 };
        addItem(product1);
        addItem(product2);
        updateItem(2, 3);
        expect(getTotal()).toEqual(250);
    });
});

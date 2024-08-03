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
        // Continue the unit test here
    });

    it('should remove a product from the cart', () => {
        // Continue the unit test here
    });

    it('should calculate the total price', () => {
        // Continue the unit test here
    });
});

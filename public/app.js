document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');
  const productForm = document.getElementById('productForm');
  const productList = document.getElementById('productList');
  const cartElement = document.getElementById('cart');
  const totalElement = document.getElementById('total');

  registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const res = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    alert(await res.text());
  });

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const res = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    alert(await res.text());
  });

  productForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const res = await fetch('/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: Date.now(), name, price }),
    });
    alert(await res.text());
    loadProducts();
  });

  async function loadProducts() {
    const res = await fetch('/products');
    const products = await res.json();
    productList.innerHTML = '';
    products.forEach(product => {
      const li = document.createElement('li');
      li.textContent = `${product.name} - $${product.price}`;
      const button = document.createElement('button');
      button.textContent = 'Add to Cart';
      button.addEventListener('click', async () => {
        await addToCart(product);
        updateCart();
      });
      li.appendChild(button);
      productList.appendChild(li);
    });
  }

  async function addToCart(product) {
    await fetch('/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
  }

  async function updateCart() {
    const res = await fetch('/cart');
    const cartItems = await res.json();
    cartElement.innerHTML = '';
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', async () => {
        await removeFromCart(item.id);
        updateCart();
      });
      li.appendChild(removeButton);
      cartElement.appendChild(li);
    });
    totalElement.textContent = total.toFixed(2);
  }

  async function removeFromCart(productId) {
    await fetch(`/cart/${productId}`, {
      method: 'DELETE',
    });
  }

  loadProducts();
});

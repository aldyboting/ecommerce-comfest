const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const nodemailer = require('nodemailer');
const path = require('path');
const { registerUser, loginUser, resetUsers } = require('./js/authService');
const { addProduct, getProducts, resetProducts } = require('./js/productService');
const { addItem, updateItem, removeItem, getTotal, getCartItems, resetCart } = require('./js/cartService');

const app = express();
app.use(bodyParser.json());
app.use(session({ secret: 'ecommerce-secret', saveUninitialized: true, resave: true }));

let orders = [];

// Serve static files
app.use(express.static(path.join(__dirname)));

// User registration
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  try {
    const message = registerUser(username, password);
    res.status(201).send(message);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// User login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  try {
    const message = loginUser(username, password);
    req.session.user = { username };
    res.send(message);
  } catch (error) {
    res.status(401).send(error.message);
  }
});

// Add product
app.post('/products', (req, res) => {
  const { id, name, price } = req.body;
  try {
    const message = addProduct(id, name, price);
    res.status(201).send(message);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get products
app.get('/products', (req, res) => {
  res.json(getProducts());
});

// Order processing
app.post('/checkout', (req, res) => {
  if (!req.session.user) {
    return res.status(401).send('Please login to checkout');
  }

  const order = {
    user: req.session.user.username,
    items: req.body.items,
    total: req.body.total,
    date: new Date(),
  };
  orders.push(order);

  // Send email notification
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword',
    },
  });

  const mailOptions = {
    from: 'youremail@gmail.com',
    to: req.session.user.username,
    subject: 'Order Confirmation',
    text: `Thank you for your order! Your total is $${req.body.total}.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.status(201).send('Order placed');
});

// Add item to cart
app.post('/cart', (req, res) => {
  const product = req.body;
  addItem(product);
  res.status(201).send('Item added to cart');
});

// Update item in cart
app.put('/cart/:id', (req, res) => {
  const productId = req.params.id;
  const quantity = req.body.quantity;
  updateItem(productId, quantity);
  res.send('Item updated in cart');
});

// Remove item from cart
app.delete('/cart/:id', (req, res) => {
  const productId = req.params.id;
  removeItem(productId);
  res.send('Item removed from cart');
});

// Get cart items
app.get('/cart', (req, res) => {
  res.json(getCartItems());
});

// Get cart total
app.get('/cart/total', (req, res) => {
  res.json({ total: getTotal() });
});

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = app;

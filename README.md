# eCommerce Project

## Description
A full-featured eCommerce web application built with Node.js, Express, and a front-end framework. This project serves as a comprehensive solution for online shopping, including product listings, user authentication, and a shopping cart. 

This dummy eCommerce application is specifically created to demonstrate unit, integration, and system testing techniques at Comfest Academy.

## Features
- User authentication and authorization
- Product listing and detailed product pages
- Shopping cart functionality
- Order management
- Responsive design

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ecommerce-project.git
    cd ecommerce-project
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=8080
    DATABASE_URL=your_database_url
    SESSION_SECRET=your_session_secret
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Usage
- Navigate to `http://localhost:8080` to view the application in your browser.
- Register a new user account or log in with existing credentials.
- Browse products, add them to your cart, and proceed to checkout.

## Testing
### Unit Testing
To perform unit tests, execute:
    ```bash
    jest unit
    ```

### System Integration Testing
Integration tests for this project are managed using Playwright. To run the system integration tests:
1. Open the `integration` folder in a separate window in VSCode.
2. In the `integration` folder, run:
    ```bash
    npx playwright test
    ```

## Contributing
We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Add some feature"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any inquiries, please contact [aldyboting@gmail.com](mailto:aldyboting@gmail.com).

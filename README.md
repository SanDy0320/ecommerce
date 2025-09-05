# NeoCart - Your Ultimate E-commerce Solution

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/sandeep-kumar-4205ab318/)](https://www.linkedin.com/in/sandeep-kumar-4205ab318/)

Welcome to NeoCart, a feature-rich, full-stack MERN (MongoDB, Express.js, React, Node.js) e-commerce platform. This application is designed to provide a seamless and intuitive shopping experience for users and a powerful management interface for administrators.

## Live Demo

[Link to Live Demo](https://neocart.onrender.com)

## Features

### User Features

*   *Authentication:* Secure user registration and login functionality.
*   *Product Browsing:* Filter products by category and price range.
*   *Shopping Cart:* Add, view, and manage products in the cart.
*   *User Dashboard:* Access and update user profile information and view order history.
*   *Password Recovery:* A "Forgot Password" option to reset credentials securely.

### Admin Features

*   *Admin Dashboard:* A comprehensive dashboard for managing the application.
*   *Category Management:* Create, update, and delete product categories.
*   *Product Management:* Add new products, update existing ones, and remove products.
*   *User Management:* View a list of all registered users.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (v14 or higher)
*   npm (v6 or higher)
*   MongoDB (local or remote instance)

### Installation

1.  *Clone the repository:*
sh
    git clone https://github.com/sandy0320/sandy0320-ecommerce.git
    cd sandy0320-ecommerce
    

2.  *Install server dependencies:*
    sh
    npm install
    

3.  *Install client dependencies:*
    sh
    cd client
    npm install
    

### Configuration

1.  Create a .env file in the root directory and add the following:
    
    PORT=8080
    MONGO_URL=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret>
    

2.  In the client directory, create a .env file and add the following:
    
    REACT_APP_API=http://localhost:8080
    

## Available Scripts

In the project directory, you can run:
*   npm start: Starts the production server.
*   npm run server: Runs the server in development mode with nodemon.
*   npm run client: Runs the React client application.
*   npm run dev: Runs both the client and server concurrently for a seamless development experience.

## Directory Structure

## Directory Structure

The project is organized with a separate client directory for the React frontend and a root structure for the Node.js backend.

```bash
sandy0320-ecommerce/
├── client/         # React Frontend
├── config/         # Database Configuration
├── controllers/    # Application Logic
├── helpers/        # Utility Functions
├── middlewares/    # Express Middlewares
├── models/         # Mongoose Schemas
├── routes/         # API Routes
└── server.js       # Server Entry Point yaml
```

## API Endpoints

The backend exposes the following RESTful API endpoints:

| Method | Endpoint                      | Description                               |
| :----- | :---------------------------- | :---------------------------------------- |
| POST   | /api/v1/auth/register       | Register a new user                       |
| POST   | /api/v1/auth/login          | Log in a user                             |
| POST   | /api/v1/auth/forgot-password| Reset user password                       |
| GET    | /api/v1/category/get-category| Get all categories                        |
| POST   | /api/v1/category/create-category | Create a new category (Admin)          |
| POST   | /api/v1/product/create-product | Create a new product (Admin)             |

## Technologies Used

### Frontend

*   React
*   React Router
*   Axios
*   Ant Design
*   Bootstrap
*   React Hot Toast

### Backend

*   Node.js
*   Express.js
*   MongoDB
*   Mongoose
*   JSON Web Token (JWT)
*   bcrypt
*   cors

## Contact

Sandeep Kumar - [sandeep.mahto2003@gmail.com](mailto:sandeep.mahto2003@gmail.com)

Project Link: [https://github.com/sandy0320/sandy0320-ecommerce](https://github.com/sandy0320/sandy0320-ecommerce)

# E-commerce Inventory

A Node.js/TypeScript backend for managing products, users, and orders in an e-commerce inventory system. Built with Express and MongoDB (Mongoose).

## Features
- Product Management: Create, read, update, delete, and search products.
- User Management: Register, authenticate, and manage users.
- Order Management: Place, view, and manage orders.
- Authentication: JWT-based authentication for secure endpoints.

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (comes with Node.js)
- MongoDB (local or cloud, e.g., MongoDB Atlas)

### Installation
1. Clone the repository:
   git clone https://github.com/ishimwefrank123/e-commerce-inventory.git
   cd e-commerce-inventory
   
2. Install dependencies:
   npm install
   

### Environment Variables
Create a `.env` file in the root directory with the following content:

PORT=5000
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

 Replace `your_mongodb_connection_string` with your MongoDB URI.
 Replace `your_jwt_secret` with a secure string.

### Running the Application
- For development (with hot-reloading):
  
  npm run start:dev
  
- For production:
  
  npm run build
  npm start
  `

The server will start on the port specified in your `.env` file (default: 5000).

### API Endpoints
- Products: `/api/products`
- Users: `/api/users`
- **Orders:** `/api/orders`

Use an API client like Postman to interact with the endpoints.

## Project Structure
```
src/
  app/
    modules/
      products/   # Product-related logic
      users/      # User-related logic
      orders/     # Order-related logic
    config/       # App configuration
  server.ts       # Entry point
```

## Author
Frank

## License
ISC 
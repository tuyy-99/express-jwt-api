# TaskBoot – Production-Ready Backend API

## Overview

**TaskBoot** is a production-ready backend REST API built with **Node.js, Express, and MongoDB**. The project follows a clean, modular architecture inspired by the *Build and Deploy Your First Production-Ready API* tutorial and is structured for **scalability, security, and maintainability**.

This repository contains only the **backend** portion of the application and is suitable for academic submission or as a starter backend template.

---

## Project Structure
```
taskboot/
│
├── backend/
│   ├── config/
│   │   └── db.js                # MongoDB connection logic
│   │
│   ├── controllers/
│   │   └── authController.js    # Request handling & business logic
│   │
│   ├── middleware/
│   │   └── authMiddleware.js    # JWT authentication middleware
│   │
│   ├── models/
│   │   └── User.js              # Mongoose user schema
│   │
│   ├── routes/
│   │   └── authRoutes.js        # API route definitions
│   │
│   ├── .env                     # Environment variables (NOT pushed to Git)
│   ├── .gitignore               # Git ignore rules
│   ├── error.txt                # Error logs / debugging notes (optional)
│   ├── package.json             # Project metadata & scripts
│   ├── package-lock.json        # Dependency lock file
│   ├── postman_collection.json  # API testing collection
│   ├── server.js                # Application entry point
│   └── node_modules/            # Dependencies (ignored by Git)
│
└── README.md
```

---

## Features

* User registration and login
* Secure password hashing using bcrypt
* JWT-based authentication and authorization
* Protected API routes via middleware
* MongoDB integration with Mongoose
* Environment-based configuration using dotenv
* Clean separation of concerns (routes, controllers, models)

---

## Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **Authentication:** JSON Web Tokens (JWT)
* **Security:** bcryptjs
* **Tools:** Nodemon, Postman

---

## Installation & Setup

### 1. Navigate to backend folder

```bash
cd taskboot/backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment configuration

Create a `.env` file inside the `backend` folder:

Ensure MongoDB is running locally or replace the URI with a MongoDB Atlas connection string.

---

## Running the Application

### Development mode

```bash
npm run dev
```

### Production mode

```bash
npm start
```

Expected output:

```
MongoDB connected
Server running on port 5000
```

---

## API Endpoints

### Register User

```
POST /api/auth/register
```

Request body:

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "123456"
}
```

---

### Login User

```
POST /api/auth/login
```

Returns a JWT token for authenticated requests.

---

### Protected Route Example

```
GET /api/auth/profile
```

Header:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## Git Configuration

### .gitignore (required)

```
node_modules/
.env
```

This ensures sensitive data and dependencies are not pushed to GitHub.

---

## Learning Outcomes

* Building a production-ready REST API
* Implementing authentication and middleware
* Structuring scalable backend projects
* Secure handling of credentials
* Testing APIs with Postman

---

## Future Enhancements

* Role-based authorization
* Input validation (Joi / Zod)
* Additional business entities (tasks, schedules)
* API documentation with Swagger
* Deployment using PM2 and Nginx

---


## License

This project is intended for educational purposes.

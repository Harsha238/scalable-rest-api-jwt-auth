# Scalable REST API with JWT Authentication

This project implements a secure and scalable backend API with authentication, role-based access control, and CRUD operations.  
A simple React frontend is included to demonstrate and interact with the APIs.

---

# Tech Stack

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs (Password Hashing)
- dotenv

## Frontend
- React.js
- Axios

---

# Features

## Authentication
- User Registration API
- User Login API
- Password hashing using bcrypt
- JWT authentication
- Protected routes

## Role-Based Access
Supports two roles:

- User  
- Admin  

Role information is stored in the database.

---

# CRUD Operations (Tasks)

The API allows users to:

- Create Task
- Get Tasks
- Update Task
- Delete Task

All task routes are protected using JWT authentication.

---

# API Endpoints

## Register User

**POST**

```
/api/auth/register
```

Request Body

```json
{
  "username": "harshitha",
  "email": "harshi@gmail.com",
  "password": "123456"
}
```

---

## Login User

**POST**

```
/api/auth/login
```

Request Body

```json
{
  "email": "harshi@gmail.com",
  "password": "123456"
}
```

Response

```json
{
  "token": "JWT_TOKEN"
}
```

Use the token in headers:

```
Authorization: Bearer JWT_TOKEN
```

---

# Task APIs

## Create Task

**POST**

```
/api/tasks
```

```json
{
  "title": "Test Task",
  "description": "Testing API"
}
```

---

## Get Tasks

**GET**

```
/api/tasks
```

Returns all tasks created by the authenticated user.

---

## Update Task

**PUT**

```
/api/tasks/:id
```

```json
{
  "title": "Updated Task"
}
```

---

## Delete Task

**DELETE**

```
/api/tasks/:id
```

Deletes a task.

---

# Project Structure

```
backend-api-assignment
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── docs
│   │   └── Backend API Assignment.json
│   └── server.js
│
├── frontend
│   └── React application
│
└── README.md
```

---

# Setup Instructions

## Clone Repository

```
git clone https://github.com/Harsha238/scalable-rest-api-jwt-auth.git
```

---

# Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
JWT_SECRET=mysecretkey123
```

Start backend server:

```
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

# Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# API Documentation

API request collection is available in:

```
backend/docs/Backend API Assignment.json
```

You can import it into **Postman** or **Hoppscotch**.

---

# Security

- Password hashing using bcrypt
- JWT authentication
- Protected API routes
- Environment variables for secret keys

---

# Scalability Notes

The system can be scaled using:

- Microservices architecture
- Redis caching
- Docker containers
- Load balancing with NGINX

---

# Author

**Kummari Sai Harshitha**
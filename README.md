# Scalable REST API with JWT Authentication and Role-Based Access

This project implements a scalable backend system with authentication, role-based access control, and CRUD APIs. A simple React frontend is included to demonstrate and interact with the APIs.

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt (password hashing)

### Frontend
- React.js
- Axios

---

# Features

## Authentication
- User Registration API
- User Login API
- Password hashing using bcrypt
- JWT-based authentication

## Role-Based Access
Supports two roles:
- User
- Admin

Role information is stored in the database and used for protected API access.

## CRUD APIs (Tasks)
Task management system with the following operations:

- Create Task
- Get Tasks
- Update Task
- Delete Task

## Security
- Password hashing using bcrypt
- Secure JWT token authentication
- Protected routes using middleware

## Basic Frontend UI
A simple React frontend that allows users to:

- Login
- Create tasks
- View tasks

The frontend interacts directly with the backend APIs.

---

# API Endpoints

## Authentication

POST `/api/auth/register`  
Register a new user

POST `/api/auth/login`  
Login user and receive JWT token

## Tasks

POST `/api/tasks`  
Create a task (Protected)

GET `/api/tasks`  
Get user tasks (Protected)

PUT `/api/tasks/:id`  
Update task (Protected)

DELETE `/api/tasks/:id`  
Delete task (Protected)




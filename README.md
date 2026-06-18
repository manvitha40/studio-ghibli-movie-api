# Studio Ghibli Movie Management API

A RESTful backend API for managing Studio Ghibli movies.

## Features

- User Registration & Login
- JWT Authentication
- Protected Routes
- MongoDB Atlas Integration
- Cloudinary Image Uploads
- Create, Read, Update, Delete Movies
- Multer File Handling

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- Multer
- Cloudinary

## API Endpoints

### Auth

POST /api/auth/register
POST /api/auth/login

### Movies

GET /api/movies
GET /api/movies/:id
POST /api/movies
PUT /api/movies/:id
DELETE /api/movies/:id

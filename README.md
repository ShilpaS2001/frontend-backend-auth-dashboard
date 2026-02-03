🚀 Frontend Developer Intern Assignment

Auth + Dashboard + CRUD Application

📌 Project Overview

This project is a full-stack web application built as part of a Frontend Developer Intern shortlisting assignment.
It demonstrates authentication, protected routes, dashboard UI, CRUD operations, and frontend–backend integration with a focus on clean UI/UX and security best practices.

🛠 Tech Stack
Frontend

React.js (Vite)

Tailwind CSS

React Router DOM

Axios

Backend

Node.js

Express.js

MongoDB (MongoDB Atlas)

Mongoose

JWT (JSON Web Tokens)

bcryptjs

Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

✨ Features
Authentication

User Signup & Login

Password hashing using bcrypt

JWT-based authentication

Protected routes (Dashboard accessible only after login)

Dashboard

View logged-in user profile

Create, view, and delete notes

User-specific data isolation

Logout functionality

UI / UX

Responsive design

Loading states and disabled buttons during API calls

Clear error and success messages

Empty state handling

🌐 Live Demo

Frontend:
👉 https://frontend-backend-auth-dashboard.vercel.app/

Backend API:
👉 https://<your-backend-url>.onrender.com

⚠️ Note: Backend may take a few seconds to respond on the first request due to free hosting (Render sleep).

📂 Project Structure
frontend-backend-auth-dashboard/
 ┣ frontend/
 ┃ ┣ src/
 ┃ ┃ ┣ api/
 ┃ ┃ ┣ components/
 ┃ ┃ ┣ pages/
 ┃ ┃ ┣ App.jsx
 ┃ ┃ ┗ main.jsx
 ┣ backend/
 ┃ ┣ src/
 ┃ ┃ ┣ controllers/
 ┃ ┃ ┣ models/
 ┃ ┃ ┣ routes/
 ┃ ┃ ┣ middleware/
 ┃ ┃ ┗ app.js
 ┃ ┣ server.js
 ┣ README.md

⚙️ Setup Instructions (Local)
1️⃣ Clone the repository
git clone https://github.com/ShilpaS2001/frontend-backend-auth-dashboard.git
cd frontend-backend-auth-dashboard

2️⃣ Backend Setup
cd backend
npm install


Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key


Run backend:

npm run dev


Backend runs on:

http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🧪 API Testing

All APIs were tested using Postman

JWT token stored as a collection variable for authenticated requests

Postman collection included in the repository

🔐 Security Practices

Passwords stored using bcrypt hashing

JWT validation for protected routes

Backend input validation

Environment variables for sensitive data

CORS enabled for frontend integration

📈 How Would I Scale This for Production?

Use environment-based configs (dev / staging / prod)

Restrict CORS to specific domains

Add refresh tokens for better auth security

Implement pagination for large datasets

Add Redis caching for frequently accessed data

Enable rate limiting and request logging

Add database indexes on user-related fields

Containerize using Docker for consistent deployments

👤 Author

Shilpa S

Frontend Developer Intern Candidate

GitHub: https://github.com/ShilpaS2001

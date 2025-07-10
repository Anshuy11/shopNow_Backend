# 🛒 ShopNow Backend

The backend API for **ShopNow**, a fast and responsive e-commerce application with features like user authentication.

This backend is built with **Express.js**, uses **MongoDB** for the database, and is designed to be deployed on **Vercel** as a serverless function.

---

## 🚀 Features

- ✅ User Signup & Login (JWT-based authentication)
- ✅ MongoDB (via Mongoose)
- ✅ Environment-based configuration using `.env`
- ✅ CORS enabled for frontend integration
- ✅ Deployed on Vercel as serverless API
- ✅ Product APIs (CRUD-ready structure)(Working)

---

## 🧱 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- body-parser
- dotenv
- cors


---

## 📁 Folder Structure
- ├── Routes/
- │ ├── AuthRouter.js
- ├── Controllers/
- │ └── AuthController.js
- ├── Middlewares/
- │ └── AuthValidation.js
- ├── Models/
- │ └── db.js
- │ └── User.js
- ├── index.js
- ├── vercel.json
- ├── .env
- └── package.json

⚙️ Environment Variables

- MONGODB_URI=your_mongodb_uri
- JWT_SECRET=your_jwt_secret



## 📦 Installation
- git clone https://github.com/your-username/shopnow-backend.git
- cd shopnow-backend
- npm install


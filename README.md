# Task Management App – Backend (Node.js + Express + MongoDB)

A production-ready REST API for managing users, tasks, and reports. Includes authentication, role-based access, profile image upload, pagination, filtering, and reporting.

## ✨ Features
- **Auth:** Sign up, login, JWT-based sessions, get current user, profile image upload  
- **Users:** List users, get user by ID  
- **Tasks:** CRUD tasks, update status, pagination, filtering, sorting  
- **Reports:** Generate task/user reports (CSV/JSON)  
- **Security:** Helmet, CORS, rate limiting, password hashing  
- **DX:** ESLint, Prettier, environment-based config

## 🧰 Tech Stack
- **Runtime:** Node.js, Express
- **DB:** MongoDB, Mongoose
- **Auth:** JWT, bcrypt
- **Uploads:** Multer (for profile images)
- **Validation:** Zod/Joi (choose one)
- **Utilities:** Morgan, Helmet, CORS, Express-Rate-Limit

## ⚙️ Prerequisites
- Node.js LTS (≥ 18)
- MongoDB (local or Atlas)
- npm or pnpm/yarn

## 🚀 Getting Started

```bash
# 1) Clone
git clone https://github.com/your-org/task-manager-backend.git
cd task-manager-backend

# 2) Install
npm install

# 3) Configure env
cp .env.example .env
# fill values in .env

# 4) Run (dev)
npm run dev

# 5) Run (prod)
npm run build
npm start
```

### Example `.env`
```env
PORT=8080
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/task_manager
JWT_SECRET=replace-with-strong-secret
JWT_EXPIRES_IN=7d
UPLOAD_DIR=./uploads
MAX_FILE_SIZE_MB=5
```

## 📁 Project Structure
```
src/
  config/
  middlewares/
  models/
  routes/
  controllers/
  utils/
  app.js
  server.js
uploads/
README.md
```

## 🗄️ Data Models

### User
- id, name, email, password (hashed), role (user/admin), avatarUrl, timestamps

### Task
- id, title, description, status (todo/in_progress/done), priority (low/medium/high), assignee, dueDate, createdBy, timestamps

## 🔐 Authentication
- JWT tokens (Bearer auth)
- bcrypt password hashing
- Auth middleware & optional admin check

## 🧪 API Reference
Base URL: `http://localhost:8080/api/v1`

### Auth
- POST `/auth/signup`
- POST `/auth/login`
- GET `/auth/me`
- POST `/auth/avatar`

### Users
- GET `/users`
- GET `/users/:id`

### Tasks
- GET `/tasks`
- POST `/tasks`
- GET `/tasks/:id`
- PATCH `/tasks/:id`
- PATCH `/tasks/:id/status`
- DELETE `/tasks/:id`

### Reports
- GET `/reports/tasks`
- GET `/reports/users`

## 🔎 Query, Pagination & Sorting
- Pagination: `page`, `limit`
- Sorting: `sort=field` or `sort=-field`
- Filters: `status`, `priority`, `assignee`, date ranges

## 🛡️ Security
- Postman, CORS, rate limiting, strong JWT secret, file upload checks

## 🧪 Testing
- Jest or Mocha with in-memory MongoDB
- Postman collection in /docs






require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes= require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const reportRoutes = require("./routes/reportRoutes");
const app = express();

// Middleware to handle CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
//connect the db
connectDB()
//,ildalware
app.use(express.json());

//Rotes
app.use('/api/auth',authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/tasks',taskRoutes)
//Start Server
// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const PORT= process.env.PORT|| 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

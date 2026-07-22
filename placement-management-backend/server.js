import express from "express";
import studentRoutes from "./routes/studentRoutes.js";
import connectionDB from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
//mongo connection
connectionDB();
app.use(

    "/uploads",

    express.static("uploads")

);

// Register Student Routes
app.use("/students", studentRoutes);
// app.get("/students/search",(req,res)=>{
//     console.log(req.query);
// })

app.use("/auth",authRoutes);

app.listen(5000, () => {
    console.log("Server Started");
});
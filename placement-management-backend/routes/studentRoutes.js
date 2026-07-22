import express from "express";
import upload from "../middleware/upload.js";

const router = express.Router();

import {

    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent,
    searchStudents

} from "../controllers/studentController.js";
import { auth } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

//SEARCH route
router.get("/search", 
    auth,
    searchStudents);
// GET All Students
router.get("/", 
    auth,
    getStudents);


// GET Student by ID
router.get("/:id", 
    auth,
    getStudentById);


// POST Student
router.post("/", 
    auth,
    adminOnly,
    upload.single("image"),addStudent);


// PUT Student
router.put("/:id", 
    auth,
    adminOnly,
    updateStudent);


// DELETE Student
router.delete("/:id",
    auth, 
    adminOnly,
    deleteStudent);



export default router;
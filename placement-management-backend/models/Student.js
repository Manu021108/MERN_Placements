import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({

    studentName: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },

    branch: {
        type: String,
        required: true,
        enum: ["CSE", "ECE", "IT", "AIML", "MECH"]
    },

    cgpa: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    image:{

    type:String,

    default:""

}

}, {

    timestamps: true

});

const Student = mongoose.model("Student", studentSchema);

export default Student;
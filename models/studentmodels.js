import mongoose from "mongoose";

// Schema
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 60 },
    fees: { 
        type: Number, 
        required: true, 
        validate: {
            validator: (value) => value >= 0,
            message: 'Fees should be greater than or equal to 5000.5'
        }
    }
})

// Models
const StudentModel = mongoose.model("student", studentSchema);

export default StudentModel;

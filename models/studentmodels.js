import { name } from "ejs";
import mongoose from "mongoose";

// Schema
const studentschema = new mongoose.schema({
    name: { type: String, required, trim: true },
    age: { type: Number, required: true, min: 18, max: 60 },
    fees: { type: mongoose, Decimal128, required: true, validate: (v) => value >= 5000.5 }
})

// Models
const studentmodel = mongoose.model("student", studentSchema)

export default studentmodel
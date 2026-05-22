const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    admissionNumber: { type: String, required: true, unique: true },
    class: { type: String, required: true }, // e.g., 'JSS1', 'SSS1'
    section: { type: String }, // e.g., 'A', 'B'
    stream: { type: String, enum: ['Science', 'Arts', 'Commercial', 'None'], default: 'None' },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    dateOfBirth: { type: Date },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);

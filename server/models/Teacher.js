const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    employeeId: { type: String, required: true, unique: true },
    subjects: [{ type: String }], // Array of subjects they teach
    education: { type: String }, // Qualifications
    salary: { type: Number },
    dateJoined: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Teacher', teacherSchema);

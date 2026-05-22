const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    class: { type: String, required: true },
    term: { type: String, enum: ['1st Term', '2nd Term', '3rd Term'], required: true },
    session: { type: String, required: true }, // e.g., '2023/2024'
    scores: [{
        subject: { type: String, required: true },
        testScore: { type: Number, default: 0 },
        examScore: { type: Number, default: 0 },
        totalScore: { type: Number, default: 0 },
        grade: { type: String }
    }],
    overallAverage: { type: Number },
    position: { type: Number },
    teacherRemarks: { type: String },
    principalRemarks: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Result', resultSchema);

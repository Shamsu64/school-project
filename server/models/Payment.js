const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    amount: { type: Number, required: true },
    purpose: { type: String, required: true }, // e.g., 'School Fees', 'Admission Fee'
    reference: { type: String, required: true, unique: true }, // Paystack reference
    status: { type: String, enum: ['Pending', 'Success', 'Failed'], default: 'Pending' },
    paymentDate: { type: Date, default: Date.now },
    term: { type: String },
    session: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);

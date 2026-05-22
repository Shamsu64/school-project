const axios = require('axios');
const Payment = require('../models/Payment');

// @desc    Initialize Paystack transaction
// @route   POST /api/payments/initialize
// @access  Student/Parent
const initializePayment = async (req, res) => {
    const { amount, email, purpose, studentId, term, session } = req.body;

    try {
        const response = await axios.post(
            'https://api.paystack.co/transaction/initialize',
            {
                email,
                amount: amount * 100, // Paystack expects amount in Kobo
                callback_url: `${process.env.FRONTEND_URL}/payment/verify`,
                metadata: {
                    studentId,
                    purpose,
                    term,
                    session
                }
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        // Create a pending payment record
        await Payment.create({
            student: studentId,
            amount,
            purpose,
            reference: response.data.data.reference,
            status: 'Pending',
            term,
            session
        });

        res.json(response.data);
    } catch (error) {
        res.status(400).json({ message: error.response ? error.response.data.message : error.message });
    }
};

// @desc    Verify Paystack payment
// @route   GET /api/payments/verify/:reference
// @access  Public (Callback)
const verifyPayment = async (req, res) => {
    const { reference } = req.params;

    try {
        const response = await axios.get(
            `https://api.paystack.co/transaction/verify/${reference}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
                }
            }
        );

        if (response.data.data.status === 'success') {
            await Payment.findOneAndUpdate(
                { reference },
                { status: 'Success' }
            );
            res.json({ status: 'success', message: 'Payment verified successfully' });
        } else {
            await Payment.findOneAndUpdate(
                { reference },
                { status: 'Failed' }
            );
            res.json({ status: 'failed', message: 'Payment verification failed' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { initializePayment, verifyPayment };

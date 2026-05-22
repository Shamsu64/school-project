const Result = require('../models/Result');
const Student = require('../models/Student');

// @desc    Upload result for a student
// @route   POST /api/teacher/results
// @access  Teacher
const uploadResult = async (req, res) => {
    const { studentId, class: className, term, session, scores } = req.body;

    try {
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        // Calculate total scores and average
        let totalSum = 0;
        const processedScores = scores.map(s => {
            const total = Number(s.testScore) + Number(s.examScore);
            totalSum += total;
            
            // Basic grading logic
            let grade = 'F';
            if (total >= 70) grade = 'A';
            else if (total >= 60) grade = 'B';
            else if (total >= 50) grade = 'C';
            else if (total >= 45) grade = 'D';
            else if (total >= 40) grade = 'E';

            return { ...s, totalScore: total, grade };
        });

        const overallAverage = totalSum / scores.length;

        const result = await Result.findOneAndUpdate(
            { student: studentId, term, session },
            { 
                class: className,
                scores: processedScores,
                overallAverage
            },
            { upsert: true, new: true }
        );

        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { uploadResult };

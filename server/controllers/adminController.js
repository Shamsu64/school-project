const User = require('../models/User');
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');

// @desc    Get all students
// @route   GET /api/admin/students
// @access  Admin
const getStudents = async (req, res) => {
    try {
        const students = await Student.find().populate('user', '-password');
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add a new student
// @route   POST /api/admin/students
// @access  Admin
const addStudent = async (req, res) => {
    const { firstName, lastName, email, password, admissionNumber, class: className, section, parentEmail } = req.body;

    try {
        // Find parent if exists
        const parent = await User.findOne({ email: parentEmail, role: 'parent' });

        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
            role: 'student'
        });

        const student = await Student.create({
            user: user._id,
            admissionNumber,
            class: className,
            section,
            parent: parent ? parent._id : null
        });

        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get all teachers
// @route   GET /api/admin/teachers
// @access  Admin
const getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find().populate('user', '-password');
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getStudents, addStudent, getTeachers };

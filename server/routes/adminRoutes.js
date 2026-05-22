const express = require('express');
const { getStudents, addStudent, getTeachers } = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.use(protect);
router.use(authorize('admin'));

router.get('/students', getStudents);
router.post('/students', addStudent);
router.get('/teachers', getTeachers);

module.exports = router;

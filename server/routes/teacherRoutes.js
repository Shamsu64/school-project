const express = require('express');
const { uploadResult } = require('../controllers/teacherController');
const { protect, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.use(protect);
router.use(authorize('teacher', 'admin'));

router.post('/results', uploadResult);

module.exports = router;

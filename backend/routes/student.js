const { Router } = require('express');
const router = Router();
const { postStudent } = require('../controllers/student');

// Route:  /api/student
router.post('/', postStudent);

module.exports = router;
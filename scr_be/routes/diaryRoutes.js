const express = require('express');
const { createDiary, updateDiary } = require('../controllers/diaryController');
const router = express.Router();

router.post('/', createDiary);
router.put('/:id', updateDiary);

module.exports = router;

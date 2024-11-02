const express = require('express');
const db = require('../db/db'); // db 모듈 가져오기
const router = express.Router();

// 사용자 목록을 가져오는 엔드포인트
router.get('/', (req, res) => {
    db.query('SELECT * FROM Users', (err, results) => {
        if (err) {
            return res.status(500).json({ error: '사용자 목록을 불러오지 못했습니다.' });
        }
        res.json(results); // 사용자 목록 반환
    });
});

module.exports = router;

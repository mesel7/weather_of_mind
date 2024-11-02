const express = require('express');
const db = require('./db/db'); // 데이터베이스 연결
const diaryRoutes = require('./routes/diaryRoutes'); // 일기 라우트
const userRoutes = require('./routes/userRoutes'); // 사용자 라우트
const jwt = require('jsonwebtoken'); // JWT 모듈

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_secret_key'; // 비밀 키 설정

app.use(express.json());
app.use('/diaries', diaryRoutes);
app.use('/users', userRoutes);

// 사용자 로그인 API
app.post('/login', (req, res) => {
    const { firebase_uid } = req.body;

    // firebase_uid로 사용자 확인
    db.query('SELECT * FROM users WHERE firebase_uid = ?', [firebase_uid], (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).json({ error: '사용자를 찾을 수 없습니다.' });
        }

        // JWT 생성
        const token = jwt.sign({ uid: firebase_uid }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    });
});

// JWT 검증 미들웨어
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// 인증이 필요한 라우트 예시
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: '이 보호된 경로에 접근할 수 있습니다.', user: req.user });
});

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});

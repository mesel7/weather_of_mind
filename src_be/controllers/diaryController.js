const db = require('../db/db');
const { getWeather } = require('../weather/weather');

const createDiary = async (req, res) => {
    const { firebase_uid, content, date, city } = req.body;

    try {
        const weatherData = await getWeather(city);
        const weather = weatherData.weather[0].description; // 날씨 설명

        db.query('INSERT INTO Diaries (firebase_uid, content, date, weather) VALUES (?, ?, ?, ?)', [firebase_uid, content, date, weather], (err, results) => {
            if (err) {
                return res.status(500).json({ error: '일기 작성에 실패했습니다.' });
            }
            res.status(201).json({ diary_id: results.insertId, firebase_uid, content, date, weather });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateDiary = (req, res) => {
    const diaryId = req.params.id;
    const { content, weather } = req.body;

    db.query('UPDATE Diaries SET content = ?, weather = ? WHERE diary_id = ?', [content, weather, diaryId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: '일기 수정에 실패했습니다.' });
        }
        res.json({ message: '일기가 수정되었습니다.' });
    });
};

module.exports = { createDiary, updateDiary };

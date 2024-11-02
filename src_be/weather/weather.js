const axios = require('axios');

const WEATHER_API_KEY = 'your_weather_api_key';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = async (city) => {
    try {
        const response = await axios.get(WEATHER_API_URL, {
            params: {
                q: city,
                appid: WEATHER_API_KEY,
                units: 'metric',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('날씨 정보를 가져오는 데 실패했습니다.');
    }
};

module.exports = { getWeather };

import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Calendar from './pages/Calendar';
import Diary from './pages/Diary';
import New from './pages/New';
import Analize from './pages/Analize';
import Counsel from './pages/Counsel';

function App() {
  const [isdataLoaded, setIsDataLoaded] = useState(false);

  if (!isdataLoaded) {
    return <div>데이터를 불러오는 중입니다</div>;
  } else {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/new" element={<New />} />
          <Route path="analize" element={<Analize />} />
          <Route path="counsel" element={<Counsel />} />
        </Routes>
      </div>
    );
  }
}

export default App;

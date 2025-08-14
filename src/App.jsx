import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import Info from './Info';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

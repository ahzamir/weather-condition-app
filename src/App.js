import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/pages/HomePage';
import WeatherInfo from './components/pages/WeatherInfo';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="weatherinfo" element={<WeatherInfo />} />
    </Routes>
  </>
);

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import States from './components/pages/StatesPage/States';
import Countries from './components/pages/HomePage/Countries';
import WeatherInfo from './components/pages/WeatherPage/WeatherInfo';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="states" element={<States />} />
      <Route path="weather" element={<WeatherInfo />} />
    </Routes>
  </>
);

export default App;

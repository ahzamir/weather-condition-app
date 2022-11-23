import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import States from './components/pages/StatesPage/States';
import Countries from './components/pages/CountriesPage/Countries';
import WeatherInfo from './components/pages/WeatherPage/WeatherInfo';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="countries" element={<Countries />} />
      <Route path="states" element={<States />} />
      <Route path="weather" element={<WeatherInfo />} />
    </Routes>
  </>
);

export default App;

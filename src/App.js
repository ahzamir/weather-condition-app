import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import States from './components/pages/StatesPage/States';
import Countries from './components/pages/CountriesPage/Countries';
import WeatherInfo from './components/pages/WeatherPage/WeatherInfo';
import Footer from './components/Footer';

const App = () => (
  <div className="App d-flex flex-column">
    <Navbar />
    <div className="h-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continent/:continentName" element={<Countries />} />
        <Route path="/:name/states" element={<States />} />
        <Route path="states" element={<States />} />
        <Route path="/:name/weather" element={<WeatherInfo />} />
      </Routes>
    </div>
    <Footer />
  </div>
);

export default App;

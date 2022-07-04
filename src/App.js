import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/pages/HomePage';
import WeatherInfo from './components/pages/WeatherInfo';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="missions" element={<WeatherInfo />} />
    </Routes>
  </>
);

export default App;

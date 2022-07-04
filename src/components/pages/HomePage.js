import React from 'react';
import { getCountries } from '../../redux/Countries';

const HomePage = () => {
  getCountries();
  return (
    <div>
      HomePage
    </div>
  );
};

export default HomePage;

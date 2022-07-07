import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = ({
  name, states, iso3,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="country"
      onClick={() => navigate('/states', { state: { name } })}
      onKeyDown={() => navigate('/states', { state: { name } })}
      tabIndex="0"
      role="button"
      aria-pressed="false"
    >
      <h3 className="countryContents">
        {name}
      </h3>
      <div>
        <p className="countryInfo">
          Iso:
          {' '}
          {iso3}
        </p>
        <p className="countryInfo">
          States:
          {states.length}
        </p>
      </div>
    </div>
  );
};

export default Country;

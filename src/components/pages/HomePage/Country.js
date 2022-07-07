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
    >
      <h3>
        {name}
      </h3>
      <div>
        <p>
          Iso:
          {' '}
          {iso3}
        </p>
        <p>
          States:

          {states.length}
        </p>
      </div>
    </div>
  );
};

export default Country;

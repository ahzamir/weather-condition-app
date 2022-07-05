import React from 'react';
import State from './State';

const Country = ({
  name, states, id,
}) => (
  <li>
    <h3>
      {name}
    </h3>
    {states.map((state) => (
      <State
        key={id}
        state={state}
      />
    ))}
  </li>
);

export default Country;

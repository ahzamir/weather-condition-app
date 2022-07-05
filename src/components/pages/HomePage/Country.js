import React from 'react';
import State from './State';

const Country = ({
  name, states,
}) => (
  <li>
    <h3>
      {name}
    </h3>
    {states.map((state) => (
      <State
        key={state.name}
        state={state}
      />
    ))}
  </li>
);

export default Country;

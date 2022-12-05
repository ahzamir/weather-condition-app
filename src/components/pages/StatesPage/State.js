import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CgArrowRightO } from 'react-icons/cg';

const State = ({ name, code }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/weather', { state: { name } })}
      onKeyDown={() => navigate('/weather', { state: { name } })}
      className="d-flex align-items-center justify-content-between p-3 state"
      tabIndex="0"
      role="button"
      aria-pressed="false"
    >
      <div>
        <h2 className="fw-bold fs-5 fs-md-2 color-primary">
          {name}
        </h2>
        <p className="text-white fw-bold fs-5 fs-md-2">
          {code}
        </p>
      </div>
      <div>
        <CgArrowRightO className="text-white fs-1 fs-md-2" />
      </div>
    </div>
  );
};

export default State;

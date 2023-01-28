import React from 'react';

const Footer = () => (
  <footer className="w-100">
    <div className="d-flex flex-column justify-content-center align-items-center w-100 p-3">
      <p className="text-white fs-6 fw-bold">
        Made with ❤️ by
        {' '}
        <a href="https://my-portfolio-ahzamir.vercel.app/" className="text-decoration-none fw-bold portfolioLink color-primary" target="_blank" rel="noreferrer">Ahzamir</a>
      </p>
    </div>
  </footer>
);

export default Footer;

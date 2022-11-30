import React from 'react';

const Footer = () => (
    <footer className="w-100">
        <hr />
        <div className="d-flex flex-column justify-content-center align-items-center w-100 p-3">
            <p className="text-white fs-6 fw-bold">© 2022 World Weather</p>
            <p className="text-white fs-6 fw-bold">Made with ❤️ by <a href="https://my-portfolio-ahzamir.vercel.app/" className="text-decoration-none text-white fw-bold portfolioLink" target={'_blank'}>Ahzamir</a></p>
        </div>
    </footer>
);

export default Footer;
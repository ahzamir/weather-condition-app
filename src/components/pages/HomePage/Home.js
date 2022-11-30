import homePageCover from '../../../aassets/images/world.svg';
import africaSvg from '../../../aassets/images/africa.svg';
import asiaSvg from '../../../aassets/images/asia.svg';
import europeSvg from '../../../aassets/images/europe.svg';
import northAmericaSvg from '../../../aassets/images/north-america.svg';
import southAmericaSvg from '../../../aassets/images/south-america.svg';
import oceaniaSvg from '../../../aassets/images/oceania.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDoubleDown } from 'react-icons/bs';

const Home = () => {
    const continents = [
        {
            name: 'Africa',
            image: africaSvg,
            id: 1,
        },
        {
            name: 'Asia',
            image: asiaSvg,
            id: 2,
        },
        {
            name: 'Europe',
            image: europeSvg,
            id: 3,
        },
        {
            name: 'North America',
            image: northAmericaSvg,
            id: 4,
        },
        {
            name: 'South America',
            image: southAmericaSvg,
            id: 5,
        },
        {
            name: 'Australia',
            image: oceaniaSvg,
            id: 6,
        },
    ];
    return (
        <div>
            <div className="homePageCover w-100 p-3">
                <a
                    href="#continents"
                    className="homePageCoverImage d-flex justify-content-center align-items-center w-75 w-md-100 mx-auto">
                    <img src={homePageCover} alt="homePageCover" className="w-75 w-md-50 p-3" />
                </a>
                <h1 className="text-white fw-bold fs-3 text-center p-3">
                    World Weather
                </h1>
                <a href="#continents">
                    <svg class="arrow bounce">
                        <path class="a1" d="M0 0 L30 22 L60 0"></path>
                        <path class="a2" d="M0 20 L30 42 L60 20"></path>
                        <path class="a3" d="M0 40 L30 62 L60 40"></path>
                    </svg>
                </a>
            </div>
            <div className="w-100 p-3 secondary-bg h-100" id="continents">
                <h2 className="text-white fw-bold fs-5 fs-md-2 text-center">
                    Welcome to the World of Countries and States <br /> <span>Explore the world weathers</span>
                </h2>
                <h3 className="text-white fw-bold fs-5 fs-md-2 text-center">
                    Select a continent to explore
                </h3>
                <div className="d-flex flex-wrap w-100">
                    {continents.map((continent) => (
                        <div key={continent.id}>
                            <img src={continent.image} alt={continent.name} />
                            <Link to={`/continent/${continent.name}`}>
                                {continent.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
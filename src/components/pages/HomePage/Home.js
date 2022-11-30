import homePageCover from '../../../aassets/images/world.svg';
import africaSvg from '../../../aassets/images/africa.svg';
import asiaSvg from '../../../aassets/images/asia.svg';
import europeSvg from '../../../aassets/images/europe.svg';
import northAmericaSvg from '../../../aassets/images/north-america.svg';
import southAmericaSvg from '../../../aassets/images/south-america.svg';
import oceaniaSvg from '../../../aassets/images/oceania.svg';
import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="h-100">
            <div className="homePageCover w-100 p-3 h-75">
                <a
                    href="#continents"
                    className="homePageCoverImage d-flex justify-content-center align-items-center w-75 w-md-100 mx-auto">
                    <img src={homePageCover} alt="homePageCover" className="w-75 w-md-50 p-3" />
                </a>
                <h1 className="text-white fw-bold fs-2 text-center">
                    Welcome to the World of Countries and States <br /> <span>Explore the world weathers</span>
                </h1>
            </div>
            <div className="w-100 p-3 secondary-bg">
                <h1>Choose a continent</h1>
                <div id='continents' className="d-flex flex-wrap w-100">
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
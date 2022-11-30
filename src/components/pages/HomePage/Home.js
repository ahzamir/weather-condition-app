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
        <div className="secondary-bg">
            <div className="homePageCover w-100 p-3">
                <div className="homePageCoverImage d-flex justify-content-center align-items-center w-75 w-md-100 mx-auto">
                    <img src={homePageCover} alt="homePageCover" className="w-75 w-md-50 p-3" />
                </div>
                <h1 className="text-white fw-bold fs-1 text-center">
                    Welcome to the World of Countries and States <br /> <span>Explore the world weathers</span>
                </h1>
            </div>
            <div>
                <h1>Choose a continent</h1>
                <div>
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
            home
        </div>
    );
};

export default Home;
import homePageCover from '../../../aassets/images/world.svg';
import africaSvg from '../../../aassets/images/africa.svg';
import asiaSvg from '../../../aassets/images/asia.svg';
import europeSvg from '../../../aassets/images/europe.svg';
import northAmericaSvg from '../../../aassets/images/north-america.svg';
import southAmericaSvg from '../../../aassets/images/south-america.svg';
import oceaniaSvg from '../../../aassets/images/oceania.svg';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
        <div className="home">
            <div className="home">
                <img src={homePageCover} alt="homePageCover" />
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
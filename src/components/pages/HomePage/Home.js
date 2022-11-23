// import homePageCover from '../../../assets/images/world.svg';
import React from 'react';
// import { Link } from 'react-router-dom';

const Home = () => {
    // const continents = [
    //     {
    //         name: 'Africa',
    //         image: '../../../assets/images/africa.svg',
    //         id: 1,
    //     },
    //     {
    //         name: 'Asia',
    //         image: '../../../assets/images/asia.svg',
    //         id: 2,
    //     },
    //     {
    //         name: 'Europe',
    //         image: '../../../assets/images/europe.svg',
    //         id: 3,
    //     },
    //     {
    //         name: 'North America',
    //         image: '../../../assets/images/north-america.svg',
    //         id: 4,
    //     },
    //     {
    //         name: 'South America',
    //         image: '../../../assets/images/south-america.svg',
    //         id: 5,
    //     },
    //     {
    //         name: 'Australia',
    //         image: '../../../assets/images/australia.svg',
    //         id: 6,
    //     },
    // ];
    return (
        <div className="home">
            {/* <div className="home">
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
            </div> */}
            home
        </div>
    );
};

export default Home;
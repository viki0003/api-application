import React from 'react';
import ApiGrid from './Components/ApiGrid';
import HomeBanner from './Components/HomeBanner';
import './home.css'


const Home = () => {

    const apiData = [
        { id: 1, title: 'News API', para:'Locate articles and breaking news headlines from news sources and blogs across the web with JSON API', link: '/news-api', type: 'News' },
        { id: 2, title: 'Pokemon API', para:'PokéAPI is free and open to use. It is also very popular. Because of this, we ask every developer to abide by our fair use policy.', link: '/pokemon-api', type: 'Cartoons' },
        { id: 3, title: 'Crypto API', para:'This API is free and provides the extensive way of comprehensive data about cryptocurrencies. The component will display a list of cryptocurrencies', link: '/crypto-api', type: 'Data' },
        { id: 4, title: 'The Sports DB', para:'Locate articles and breaking news headlines from news sources and blogs across the web with JSON API', link: 'https://www.thesportsdb.com/api.php', type: 'Sports' },
    ];

    return (
        <>

            <HomeBanner/>
            <ApiGrid apiData={apiData} />
        </>
    );
}

export default Home
import React from 'react';
import ApiGrid from './Components/ApiGrid';
import HomeBanner from './Components/HomeBanner';
import CryptoProvider from '../../APIHooks/CryptoContext'
import NewsProvider from '../../APIHooks/NewsContext';
import PokemonProvider from '../../APIHooks/PokemonContext';
import './home.css'


const Home = () => {

    return (
        <>
            <PokemonProvider>
                <NewsProvider>
                    <CryptoProvider>
                        <HomeBanner />
                        <ApiGrid />
                    </CryptoProvider>
                </NewsProvider>
            </PokemonProvider>
        </>
    );
}

export default Home
import React, { useContext } from 'react';
import BlockIcon from '../../../Assets/AppIcon/BlockIcon'
import LongArrow from '../../../Assets/AppIcon/LongArrow';
import { CryptoContext } from '../../../APIHooks/CryptoContext';
import { NewsContext } from '../../../APIHooks/NewsContext';
import { PokemonContext } from '../../../APIHooks/PokemonContext';
import { Link } from 'react-router-dom';

const truncateText = (text, charLimit) => {
    return text.length > charLimit ? text.slice(0, charLimit) + "..." : text;
};


const ApiGrid = () => {

    const { CryptototalItems } = useContext(CryptoContext);
    const { NewstotalItems } = useContext(NewsContext);
    const { PoketotalItems } = useContext(PokemonContext);

    const apiData = [
        { id: 1, title: 'News API', para: 'Locate articles and breaking news headlines from news sources and blogs across the web with JSON API', link: '/news-api', dataAvailable: NewstotalItems, type: 'News' },
        { id: 2, title: 'Pokemon API', para: 'PokéAPI is free and open to use. It is also very popular. Because of this, we ask every developer to abide by our fair use policy.', link: '/pokemon-api', dataAvailable: PoketotalItems, type: 'Cartoons' },
        { id: 3, title: 'Crypto API', para: 'This API is free and provides the extensive way of comprehensive data about cryptocurrencies. The component will display a list of cryptocurrencies', link: '/crypto-api', dataAvailable: CryptototalItems, type: 'Data' },
    ];
    
   
    return (
        <>
            <div className='bg-white'>
                <div className='container pt-5 pb-5'>
                    <div className='api-list-blocks'>
                        {apiData.map((api) => (
                            <div key={api.id} className='api-block'>
                                <div className='block-header'>
                                    <div className='d-flex align-items-center gap-2'>
                                        <span className='svg-block'>
                                            <BlockIcon />
                                        </span>
                                        <h4>{api.title}</h4>
                                    </div>
                                </div>
                                <div className='block-body'>
                                    <p>{truncateText(api.para, 80)}</p>
                                </div>
                                <div className='block-footer d-flex al-hn-items-center justify-content-between'>
                                    <span>{api.dataAvailable} Data Available</span>
                                    <Link to={api.link} className='d-flex align-items-center gap-2'>
                                        Read More
                                        <LongArrow />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
};

export default ApiGrid;

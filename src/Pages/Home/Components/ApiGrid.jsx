import React from 'react';
import BlockIcon from '../../../Assets/AppIcon/BlockIcon'
import LongArrow from '../../../Assets/AppIcon/LongArrow';
import { Link } from 'react-router-dom';

const truncateText = (text, charLimit) => {
    return text.length > charLimit ? text.slice(0, charLimit) + "..." : text;
  };

const ApiGrid = ({ apiData }) => {
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
                            <span>13 Data Available</span>
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

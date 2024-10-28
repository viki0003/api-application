import React from 'react';
import { useCatApi } from '../../../APIHooks/CatApiContext';
import Loader from '../../../Component/Loader';

const DataSection = () => {
    const { catData, error, loading } = useCatApi();

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div className="data-section">
            <div className="container">
                <div className="section-title">
                    <h2>Cat's List</h2>
                </div>

                <div className="cat-data-container">
                    
                    <div className="cat-images">
                        {catData.map((cat, index) => (
                            <div key={index} className="cat-image">
                                <img src={cat.url} alt="Cat" className='w-100 object-fit-cover rounded-5' height={750} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataSection
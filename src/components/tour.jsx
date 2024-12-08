import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <article className="tour" id={`tour-item-${id}`}>
            <img src={image} alt={name} />
            <div className="tour-info">
                <h4>{name}</h4>
                <h5 className="tour-price">${price}</h5>
                <p id={`tour-item-para-${id}`}>
                    {showMore ? info : `${info.substring(0, 200)}...`}
                    <button
                        className="toggle-btn"
                        id={`see-more-${id}`}
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? 'Show less' : 'See more'}
                    </button>
                </p>
                <button
                    id={`delete-btn-${id}`}
                    className="delete-btn"
                    onClick={() => removeTour(id)}
                >
                    Not Interested
                </button>
            </div>
        </article>
    );
};

export default Tour;
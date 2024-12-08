import React, { useState, useEffect } from 'react';
import Loading from './loading';
import Tours from './tours';
import TourAPI from './TourAPI';
import './tour.css';

const App = () => {

    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const fetchTours = () => {
        setLoading(true);
        try {
            const data = TourAPI(); // Call the function to get the data
            setTours(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching tours:', error);
            setLoading(false);
        }
    };

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };

    useEffect(() => {
        fetchTours();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (tours.length === 0) {
        return (
            <div className="no-tours">
                <h2>No tours left</h2>
                <button className="refresh-btn" onClick={fetchTours}>
                    Refresh
                </button>
            </div>
        );
    }
    
    return(
      <main id="main">
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    )
}
export default App;

import React from 'react';
import './dashboard.css'


const FarmerDetails = ({ farmer }) => {
    return (
        <div className="farmer-details">
            <p><strong>Name:</strong> {farmer.name}</p>
            <p><strong>Location:</strong> {farmer.location}</p>
            <p><strong>Crops:</strong> {farmer.crops.join(', ')}</p>
        </div>
    );
};

export default FarmerDetails;
import React from 'react';
import FarmerDetails from './FarmerDetails';
import ResourceCard from './ResourceCard';
import './dashboard.css'

const farmer = {
    name: 'John Doe',
    location: 'Iowa, USA',
    crops: ['Corn', 'Soybean', 'Wheat']
};

const resources = [
    { id: 1, name: 'Tractor', description: 'John Deere 5075E', price: '$20,000' },
    { id: 2, name: 'Plow', description: 'Disc Plow', price: '$1,500' },
    { id: 3, name: 'Seed', description: 'Hybrid Corn Seed', price: '$200/bag' }
];

const FarmerDashboard = () => {
    return (
        <div className="dashboard">
            <header>
                <h1>Farmer Dashboard</h1>
                <nav>
                    <a href="#details">Farmer Details</a>
                    <a href="#resources">Resources</a>
                </nav>
            </header>
            <section id="details">
                <h2>Farmer Details</h2>
                <FarmerDetails farmer={farmer} />
            </section>
            <section id="resources">
                <h2>Resources for Sale</h2>
                <div className="resources">
                    {resources.map(resource => (
                        <ResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FarmerDashboard;
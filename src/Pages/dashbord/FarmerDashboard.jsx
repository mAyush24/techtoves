import React from 'react';
import FarmerDetails from './FarmerDetails';
import ResourceCard from './ResourceCard';
import './dashboard.css'

const farmer = {
    name: 'Ayush Chaudhary',
    location: 'Ghaziabad, India',
    crops: ['Rice', 'Soybean', 'Wheat']
};

const resources = [
    { id: 1, name: 'Wheat', description: 'long, slender leaves, stems', price: ' ₹700' ,img: 'src/assets/wheat.jpeg'},
    { id: 2, name: 'Rice', description: 'edible starchy cereal grain', price: ' ₹900', img:'src/assets/rice.jpeg'},
    { id: 3, name: 'Seed', description: 'Hybrid Corn Seed and others', price: ' ₹200/bag', img:'src/assets/seed.jpeg'},
    { id: 4, name: 'Corn', description: 'annual cereal grass that produces large', price: ' ₹5000' ,img: 'src/assets/corn.jpeg'},
    { id: 5, name: 'Sugarcane', description: 'a species of tall, perennial grass', price: ' ₹1,500', img:'src/assets/sugar.jpeg'},
    { id: 6, name: 'Potato', description: 'starchy root vegetable native', price: ' ₹600/bag', img:'src/assets/potato.jpeg'},
    { id: 7, name: 'Tomato', description: 'globular or ovoid', price: ' ₹400/bag', img:'src/assets/tomato.jpeg'}
];

const FarmerDashboard = () => {
    return (
        <>
            <div className="dashboardd">
                <header>
                    <h1>Farmer Dashboard</h1>
                    {/* <nav>
                        <a href="#details">Farmer Details</a>
                        <a href="#resources">Resources</a>
                    </nav> */}
                </header>
                <section id="detailsd">
                    <h2>Farmer Details</h2>
                    <FarmerDetails farmer={farmer} />
                </section>
                <section id="resourcesd">
                    <h2>Resources for Sale</h2>
                    <div className="resourcesd">
                        {resources.map(resource => (
                            <ResourceCard key={resource.id} resource={resource} />
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default FarmerDashboard;
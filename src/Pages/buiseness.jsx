import React, { useState } from 'react';
import './buiseness.css'
import { Link } from 'react-router-dom';


const Buiseness = () => {
    const [selectedCrop, setSelectedCrop] = useState('none');
    const [quantity, setQuantity] = useState(1);
    const msp = 200;

    const handleCropChange = (event) => {
        const crop = event.target.value;
        setSelectedCrop(crop);
        if (crop === 'none') {
            setQuantity(1);
        }
    };
       
    const handleQuantityChange = (delta) => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + delta;
            return newQuantity > 0 ? newQuantity : 1;
        });
    };

    const handleBuyNow = () => {
        alert(`You have bought ${quantity} units of ${selectedCrop} for ₹${(quantity * msp).toFixed(2)}`);
    };

    const totalPrice = quantity * msp;

    return (
        <div className="container">
            <header className="header">
                {/* <button id="home-btn">Home</button> */}
                <Link to='/' id="home-btn">Home</Link>
            </header>
            <main className="main">
                <section className="crop-selection">
                    <h3>Select Crop</h3>
                    <select id="crop-select" value={selectedCrop} onChange={handleCropChange}>
                        <option value="none">Select a crop</option>
                        <option value="crop1">Crop 1</option>
                        <option value="crop2">Crop 2</option>
                        <option value="crop3">Crop 3</option>
                    </select>
                </section>
                {selectedCrop !== 'none' && (
                    <section className="quantity-selection">
                        <h2>Quantity (IN TONN)</h2>
                        <div className="quantity-control">
                            <button id="quantity-minus" onClick={() => handleQuantityChange(-1)}>-</button>
                            <input type="number" id="quantity" value={quantity} readOnly />
                            <button id="quantity-plus" onClick={() => handleQuantityChange(1)}>+</button>
                        </div>
                        <p id="price">Price: ₹{totalPrice.toFixed(2)}</p>
                        <button id="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
                    </section>
                )}
            </main>
        </div>
    );
};

export default Buiseness;

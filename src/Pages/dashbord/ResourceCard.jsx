import React from 'react';
import './dashboard.css'


const ResourceCard = ({ resource }) => {
  return (
    <div className="resource-cardd">
      <img src={resource.img} alt="image" />
      <h3>{resource.name}</h3>
      <p>{resource.description}</p>
      <p><strong>Price:</strong> {resource.price}</p>
    </div>
  );
};

export default ResourceCard;
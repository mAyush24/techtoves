import React from 'react';
import './dashboard.css'


const ResourceCard = ({ resource }) => {
  return (
    <div className="resource-card">
      <h3>{resource.name}</h3>
      <p>{resource.description}</p>
      <p><strong>Price:</strong> {resource.price}</p>
    </div>
  );
};

export default ResourceCard;
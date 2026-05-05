import React from 'react';
import './SubscriptionCard.css';

function SubscriptionCard({ data }) {
  const initial = data.name.charAt(0).toUpperCase();

  return (
    <div className="card">
      <div className="service-cell">
        <span className="service-avatar">{initial}</span>
        <div>
          <h3>{data.name}</h3>
          <p>{data.plan}</p>
        </div>
      </div>

      <div className="price-cell">
        <p>₹{data.price}</p>
      </div>

      <div className="renewal-cell">
        <p>{data.due}</p>
      </div>

      <div className="status-cell">
        <span className={data.status === 'Active' ? 'active' : 'pending'}>
          {data.status}
        </span>
      </div>
    </div>
  );
}

export default SubscriptionCard;

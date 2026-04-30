import React from 'react';
import './SubscriptionCard.css';

function SubscriptionCard({ data }) {
  return (
    <div className="card">
      <div>
        <h3>{data.name}</h3>
        <p>{data.plan}</p>
      </div>

      <div>
        <p>{data.price}</p>
      </div>

      <div>
        <p>{data.due}</p>
      </div>

      <div>
        <span className={data.status === 'Active' ? 'active' : 'pending'}>
          {data.status}
        </span>
      </div>
    </div>
  );
}

export default SubscriptionCard;
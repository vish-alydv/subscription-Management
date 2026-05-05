import SubscriptionCard from '../components/SubscriptionCard';

function SubscriptionsPage({ subscriptions }) {
  return (
    <>
      <div className="page-header">
        <div>
          <span className="eyebrow">Subscriptions</span>
          <h1>All Subscriptions</h1>
          <p>Yahan par aapke saare saved subscriptions show honge.</p>
        </div>
      </div>

      <div className="content-panel">
        <div className="panel-header">
          <div>
            <h2>Subscription List</h2>
            <p>{subscriptions.length} total subscriptions</p>
          </div>
        </div>

        <div className="list-heading">
          <span>Service</span>
          <span>Price</span>
          <span>Renewal</span>
          <span>Status</span>
        </div>

        <div className="cards-container">
          {subscriptions.map((sub, index) => (
            <SubscriptionCard key={`${sub.name}-${index}`} data={sub} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SubscriptionsPage;

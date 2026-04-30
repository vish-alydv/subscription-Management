import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import SubscriptionCard from './components/SubscriptionCard';

function App() {
  const subscriptions = [
    {
      name: 'Netflix',
      plan: 'Premium',
      price: '$15.99',
      due: '10 May 2026',
      status: 'Active',
    },
    {
      name: 'Spotify',
      plan: 'Family',
      price: '$9.99',
      due: '15 May 2026',
      status: 'Active',
    },
    {
      name: 'YouTube Premium',
      plan: 'Monthly',
      price: '$11.99',
      due: '22 May 2026',
      status: 'Pending',
    },
    {
      name: 'Amazon Prime',
      plan: 'Yearly',
      price: '$49.99',
      due: '1 June 2026',
      status: 'Active',
    },
  ];

  return (
    <div className="app">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <div className="dashboard-header">
          <h2>Your Subscriptions</h2>
          <button>Add New</button>
        </div>

        <div className="stats-boxes">
          <div className="box">
            <h3>Total Monthly</h3>
            <p>$87.96</p>
          </div>

          <div className="box">
            <h3>Active Plans</h3>
            <p>4</p>
          </div>

          <div className="box">
            <h3>Upcoming Renewals</h3>
            <p>2</p>
          </div>
        </div>

        <div className="cards-container">
          {subscriptions.map((sub, index) => (
            <SubscriptionCard key={index} data={sub} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
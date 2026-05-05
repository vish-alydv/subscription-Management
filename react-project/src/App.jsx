import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import SubscriptionsPage from './pages/SubscriptionsPage';

const initialFormData = {
  name: '',
  plan: '',
  price: '',
  due: '',
  status: 'Active',
};

function App() {
  const [subscriptions, setSubscriptions] = useState([
    {
      name: 'Netflix',
      plan: 'Premium',
      price: '649',
      due: '10 May 2026',
      status: 'Active',
    },
    {
      name: 'Spotify',
      plan: 'Family',
      price: '179',
      due: '15 May 2026',
      status: 'Active',
    },
    {
      name: 'YouTube Premium',
      plan: 'Monthly',
      price: '149',
      due: '22 May 2026',
      status: 'Pending',
    },
    {
      name: 'Amazon Prime',
      plan: 'Yearly',
      price: '1499',
      due: '1 June 2026',
      status: 'Active',
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const totalMonthly = subscriptions.reduce(
    (total, item) => total + Number(item.price || 0),
    0,
  );
  const activePlans = subscriptions.filter((item) => item.status === 'Active').length;
  const upcomingRenewals = subscriptions.filter((item) => item.status === 'Pending').length;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubscriptions((currentSubscriptions) => [
      ...currentSubscriptions,
      {
        ...formData,
        price: Number(formData.price).toFixed(2),
      },
    ]);
    setFormData(initialFormData);
    setShowForm(false);
  }

  return (
    <div className="app">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                subscriptions={subscriptions}
                totalMonthly={totalMonthly}
                activePlans={activePlans}
                upcomingRenewals={upcomingRenewals}
                showForm={showForm}
                setShowForm={setShowForm}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            path="/subscriptions"
            element={<SubscriptionsPage subscriptions={subscriptions} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import SubscriptionCard from '../components/SubscriptionCard';

function Dashboard({
  subscriptions,
  totalMonthly,
  activePlans,
  upcomingRenewals,
  showForm,
  setShowForm,
  formData,
  handleChange,
  handleSubmit,
}) {
  return (
    <>
      <div className="dashboard-header">
        <div>
          <span className="eyebrow">Subscription overview</span>
          <h1>Your Subscriptions</h1>
          <p>Track plans, renewal dates, and monthly spending in one clean dashboard.</p>
        </div>

        <button className="primary-action" type="button" onClick={() => setShowForm((isOpen) => !isOpen)}>
          <span>{showForm ? '-' : '+'}</span>
          {showForm ? 'Close Form' : 'Add New'}
        </button>
      </div>

      {showForm && (
        <form className="add-form" onSubmit={handleSubmit}>
          <div className="form-header">
            <div>
              <span className="eyebrow">New entry</span>
              <h3>Add Subscription Details</h3>
            </div>
            <p>Fill details once, then the new plan appears in the subscriptions page.</p>
          </div>

          <div className="form-grid">
            <label>
              Service Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Netflix"
                required
              />
            </label>

            <label>
              Plan
              <input
                type="text"
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                placeholder="Premium"
                required
              />
            </label>

            <label>
              Monthly Price
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="199"
                min="0"
                step="0.01"
                required
              />
            </label>

            <label>
              Due Date
              <input
                type="text"
                name="due"
                value={formData.due}
                onChange={handleChange}
                placeholder="10 May 2026"
                required
              />
            </label>

            <label>
              Status
              <select name="status" value={formData.status} onChange={handleChange}>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
              </select>
            </label>
          </div>

          <div className="form-actions">
            <button type="button" className="secondary-btn" onClick={() => setShowForm(false)}>
              Cancel
            </button>
            <button type="submit">Save Details</button>
          </div>
        </form>
      )}

      <div className="stats-boxes">
        <div className="box box-total">
          <h3>Total Monthly</h3>
          <p>₹{totalMonthly.toFixed(2)}</p>
          <span>Monthly spend</span>
        </div>

        <div className="box box-active">
          <h3>Active Plans</h3>
          <p>{activePlans}</p>
          <span>Currently running</span>
        </div>

        <div className="box box-renewal">
          <h3>Upcoming Renewals</h3>
          <p>{upcomingRenewals}</p>
          <span>Need attention</span>
        </div>
      </div>

      <div className="content-panel">
        <div className="panel-header">
          <div>
            <h2>All Subscriptions</h2>
            <p>{subscriptions.length} plans saved</p>
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

export default Dashboard;

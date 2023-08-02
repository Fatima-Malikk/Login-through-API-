import React, { useState} from 'react';
import CustomerTab from './CustomerReservation';
import './Main.css'
const Main= () => {
  const [activeTab, setActiveTab] = useState('customer');

return(

      <div className="main-page">
        <div className="tabs">
          <button
            className={activeTab === 'customer' ? 'active' : ''}
            onClick={() => setActiveTab('customer')}
          >
            1. Customer
          </button>
          <button
            className={activeTab === 'verification' ? 'active' : ''}
            onClick={() => setActiveTab('verification')}
          >
            2. Verification
          </button>
          <button
            className={activeTab === 'sign' ? 'active' : ''}
            onClick={() => setActiveTab('sign')}
          >
            3. Sign
          </button>
          <button
            className={activeTab === 'payment' ? 'active' : ''}
            onClick={() => setActiveTab('payment')}
          >
            4. Payment
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 'customer' && <CustomerTab />}
          {/* {activeTab === 'verification' && <VerificationTab />} */}
          {/* {activeTab === 'sign' && <SignTab />} */}
          {/* {activeTab === 'payment' && <PaymentTab />} */}
        </div>
      </div>

  );
};

export default Main;

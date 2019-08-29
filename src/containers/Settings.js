import React from 'react';
import AccountDetails from '../components/settings/AccountDetails';
import Password from '../components/settings/Password';
import UnitTracking from '../components/settings/UnitTracking';
import BillingHistory from '../components/settings/BillingHistory';

const Settings = () => {
  return (
    <>
      <div>I'm Settings</div>
      <AccountDetails />
      <Password />
      <UnitTracking />
      <BillingHistory />
    </>
  );
};

export default Settings;
import React from 'react';
import ReactDOM from 'react-dom/client';
import DeveloperDashboard from './DeveloperDashboard'; // เรียกใช้ Dashboard ของเรา

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DeveloperDashboard />
  </React.StrictMode>,
);
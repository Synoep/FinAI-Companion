import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import SalesCoach from './pages/SalesCoach';
import LeadManagement from './pages/LeadManagement';
import LearningCenter from './pages/LearningCenter';
import ClientEngagement from './pages/ClientEngagement';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="sales-coach" element={<SalesCoach />} />
        <Route path="leads" element={<LeadManagement />} />
        <Route path="learning" element={<LearningCenter />} />
        <Route path="clients" element={<ClientEngagement />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
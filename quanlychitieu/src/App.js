import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from './pages/Admin/Dashboard';
import Dashboard from './pages/Admin/Dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          {/* Các route khác */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Header from './components/Client/Header/Header';
import Sidebar from './components/Client/Sidebar/Sidebar';
import IncomeOverview from './pages/Client/Home/Home';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<IncomeOverview />} />
    )
  );

  return (
    <>
      <Header />
      <Sidebar />
      <div class="main-wrapper my-2">
  <div class="container">
  <RouterProvider router={router} />
  </div>
</div>
      
    </>
  );
}

export default App;

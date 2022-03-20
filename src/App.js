import React from 'react';
import { Outlet, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav>
        <div onClick={() => navigate('/invoices')}>Invoices</div>
        <div onClick={() => navigate('/expenses')}>Expenses</div>
      </nav>
      <Outlet />
    </div>
  );
}

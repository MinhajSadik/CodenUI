import React from 'react';
import { BoardNavbar, Sidebar } from '../../components';

export default function Dashboard({ children }) {
  return (
    <div className="container-scroller">
      <BoardNavbar />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

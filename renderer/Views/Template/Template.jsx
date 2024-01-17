import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../../Components/Header';

export default function Template({ caja }) {
  const token = localStorage.getItem('token');
  if (!token) return (<Navigate to="/" />);
  return (
    <>
      <Header
        caja={caja}
      />
      <Outlet />
    </>
  );
}

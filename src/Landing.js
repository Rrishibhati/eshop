import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import { isLogin } from './components/DataLayer/reducer';

function Landing() {
  const navigate = useNavigate();
  useEffect(() => {
    let isLoginStatus = isLogin();
    if (!isLoginStatus) {
      navigate('/login');
      return;
    }
    return isLoginStatus;
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Landing
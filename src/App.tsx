import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from './components/molecules/Header';
import LoadingStatus from './components/atoms/LoadingStatus';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return <LoadingStatus />;
  }
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
}

export default App;

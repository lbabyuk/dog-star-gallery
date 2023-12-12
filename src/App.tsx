import { Outlet } from 'react-router-dom';
import HeaderComponent from './components/molecules/Header';

import './App.css';

function App() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
}

export default App;

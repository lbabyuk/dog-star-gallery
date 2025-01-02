import { useRoutes } from 'react-router-dom';
import { routes } from './routes/routes';
import './App.css';

export const App = () => {
  const element = useRoutes(routes);
  return <div>{element}</div>;
};

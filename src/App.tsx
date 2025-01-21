import { useLocation, useRoutes } from 'react-router-dom';
import { motion } from 'framer-motion';
import { routes } from './routes/routes';
import './App.css';
import { LoadingStatus } from './components/molecules';
import { MotionTransitionWrapper } from './components/atoms';

export const App = () => {
  const element = useRoutes(routes);
  const location = useLocation();

  if (!element) {
    return (
      <MotionTransitionWrapper>
        <LoadingStatus />
      </MotionTransitionWrapper>
    );
  }

  return <motion.div key={location.pathname}>{element}</motion.div>;
};

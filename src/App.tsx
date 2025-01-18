import { useRoutes } from 'react-router-dom';
import { motion } from 'framer-motion';
import { routes } from './routes/routes';
import './App.css';
import { Footer, Header, LoadingStatus } from './components/molecules';

export const App = () => {
  const element = useRoutes(routes);

  if (!element) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <LoadingStatus />
      </motion.div>
    );
  }

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        {element}
      </motion.div>
      <Footer />
    </>
  );
};

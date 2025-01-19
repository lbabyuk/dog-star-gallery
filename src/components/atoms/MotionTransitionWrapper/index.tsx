import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type MotionTransitionWrapperProps = {
  children: ReactNode;
};

export const MotionTransitionWrapper = ({
  children
}: MotionTransitionWrapperProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

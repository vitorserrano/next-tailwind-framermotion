import { motion } from 'framer-motion';

import Button from '../components/Button';

const NextPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img src="/img/nextjs.svg" alt="Next.js" layoutId="nextjs-logo" />

      <Button />
    </div>
  );
};

export default NextPage;

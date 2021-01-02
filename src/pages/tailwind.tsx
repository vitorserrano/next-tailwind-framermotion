import { motion } from 'framer-motion';

import Button from '../components/Button';

const TailwindPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img
        src="/img/tailwind.svg"
        alt="Next.js"
        layoutId="tailwind-logo"
      />

      <Button />
    </div>
  );
};

export default TailwindPage;

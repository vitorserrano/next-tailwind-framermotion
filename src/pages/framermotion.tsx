import { motion } from 'framer-motion';

import Button from '../components/Button';

const FramerMotionPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img
        src="/img/framermotion.svg"
        alt="Next.js"
        layoutId="framermotion-logo"
      />

      <Button />
    </div>
  );
};

export default FramerMotionPage;

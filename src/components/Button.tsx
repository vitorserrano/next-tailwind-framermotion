import { motion } from 'framer-motion';

import Link from 'next/link';

const Button: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <Link href="/">
        <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition">
          Voltar para home
        </a>
      </Link>
    </motion.div>
  );
};

export default Button;

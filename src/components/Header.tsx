import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex justify-center items-center py-2 md:justify-between md:py-4">
      <Image src="/img/logo.svg" alt="Logo" width={150} height={33} />

      <nav className="hidden md:block space-x-8">
        <Link href="/nextjs">
          <a className="tracking-wide hover:text-gray-300">Next.js</a>
        </Link>

        <Link href="/tailwind">
          <a className="tracking-wide hover:text-gray-300">TailwindCSS</a>
        </Link>

        <Link href="/framermotion">
          <a className="tracking-wide hover:text-gray-300">Framer Motion</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

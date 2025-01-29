import Link from 'next/link';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="absolute top-0 z-50 w-full">
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      
      {/* Header content */}
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <Logo />
        </Link>

        {/* Get Started Button */}
        <button className="rounded bg-red-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-red-700">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;

import Hero from '@/components/Hero';
import Trending from '@/components/Trending';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-purple-900 via-red-900 to-black">
          {/* Animated gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50" />
          {/* Mesh gradient effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_100%)]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Trending />
        <Footer />
      </div>
    </main>
  );
}

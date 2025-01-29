import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-8 w-8">
        <Image
          src="/favicon1.ico"
          alt="Flixtor Icon"
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      <span className="text-2xl font-bold text-white">
        Flix<span className="text-red-600">tor</span>
      </span>
    </div>
  );
};

export default Logo;

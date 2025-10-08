import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <Link href="/" className="inline-block bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 hover:bg-white/20 transition-all duration-300">
          <Image
            src="/fundstream_transparent.png"
            alt="fund-stream"
            width={200}
            height={60}
            priority
            className="h-10 w-auto md:h-12"
          />
        </Link>
      </div>
    </header>
  );
}


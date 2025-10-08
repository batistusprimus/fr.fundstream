import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/fundstream_transparent.png"
              alt="fund-stream"
              width={180}
              height={54}
              priority
              className="h-12 w-auto"
            />
          </Link>
          <a
            href="#formulaire"
            className="hidden md:inline-flex items-center justify-center bg-[#00B8A9] hover:bg-[#009688] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Démarrer ma demande
          </a>
        </div>
      </div>
    </header>
  );
}


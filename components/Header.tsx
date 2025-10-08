import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E2E8F0]">
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
          <nav className="hidden md:flex items-center gap-6">
            <a href="#comment-ca-marche" className="text-[#1E3A5F] hover:text-[#00B8A9] font-medium">Fonctionnement</a>
            <a href="#formulaire" className="text-[#1E3A5F] hover:text-[#00B8A9] font-medium">Formulaire</a>
            <Link href="/contact" className="text-[#1E3A5F] hover:text-[#00B8A9] font-medium">Contact</Link>
            <a
              href="#formulaire"
              className="inline-flex items-center justify-center bg-[#00B8A9] hover:bg-[#009688] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Démarrer
            </a>
          </nav>
          <a
            href="#formulaire"
            className="md:hidden inline-flex items-center justify-center bg-[#00B8A9] hover:bg-[#009688] text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300"
          >
            Démarrer
          </a>
        </div>
      </div>
    </header>
  );
}


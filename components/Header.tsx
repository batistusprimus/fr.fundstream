import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <Link href="/" className="inline-block">
          <Image
            src="/fundstream_transparent.png"
            alt="fund-stream"
            width={200}
            height={60}
            priority
            className="h-12 w-auto md:h-16"
          />
        </Link>
      </div>
    </header>
  );
}


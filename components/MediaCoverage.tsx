import Image from 'next/image';

export default function MediaCoverage() {
  const mediaLogos = [
    { name: 'Les Échos', file: 'lesechos.png', width: 160, height: 40 },
    { name: 'Le Figaro', file: 'lefigaro.png', width: 140, height: 40 },
    { name: 'La Tribune', file: 'latribune.png', width: 150, height: 40 },
    { name: 'BFM Business', file: 'bfmbusiness.png', width: 160, height: 40 },
    { name: 'Challenges', file: 'challenges.png', width: 140, height: 40 },
    { name: 'L\'Usine Nouvelle', file: 'usinenouvelle.png', width: 150, height: 40 },
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-4">
            Couverture média
          </h3>
          <p className="text-lg text-[#64748B] italic">
            Industry coverage from
          </p>
        </div>

        {/* Logos en grayscale */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {mediaLogos.map((media, index) => (
            <div 
              key={index}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={`/Press/${media.file}`}
                alt={media.name}
                width={media.width}
                height={media.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


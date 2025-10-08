import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-br from-[#1E3A5F] to-[#142a42] text-white py-16 mt-0 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <Image
              src="/fundstream_transparent.png"
              alt="fund-stream"
              width={150}
              height={45}
              className="h-10 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-gray-300 text-base leading-relaxed">
              La solution simple et rapide pour trouver le financement adapté à votre entreprise.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-5 text-white">Liens utiles</h4>
            <ul className="space-y-3 text-base">
              <li>
                <a href="/politique-de-confidentialite" className="text-gray-300 hover:text-[#00B8A9] transition-colors inline-flex items-center group">
                  <span className="mr-2 text-[#00B8A9] group-hover:translate-x-1 transition-transform">→</span>
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="/conditions-generales" className="text-gray-300 hover:text-[#00B8A9] transition-colors inline-flex items-center group">
                  <span className="mr-2 text-[#00B8A9] group-hover:translate-x-1 transition-transform">→</span>
                  Conditions générales d&apos;utilisation
                </a>
              </li>
              <li>
                <a href="/mentions-legales" className="text-gray-300 hover:text-[#00B8A9] transition-colors inline-flex items-center group">
                  <span className="mr-2 text-[#00B8A9] group-hover:translate-x-1 transition-transform">→</span>
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-[#00B8A9] transition-colors inline-flex items-center group">
                  <span className="mr-2 text-[#00B8A9] group-hover:translate-x-1 transition-transform">→</span>
                  Nous contacter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p className="mb-2 text-base font-medium text-gray-300">fund-stream par <span className="text-[#00B8A9]">BPCORP</span></p>
          <p>&copy; 2025 BPCORP. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}


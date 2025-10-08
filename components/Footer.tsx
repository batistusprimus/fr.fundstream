import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1E3A5F] to-[#142a42] text-white py-16 mt-0 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
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
                <a href="/contact" className="text-gray-300 hover:text-[#00B8A9] transition-colors inline-flex items-center group">
                  <span className="mr-2 text-[#00B8A9] group-hover:translate-x-1 transition-transform">→</span>
                  Nous contacter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-5 text-white">Contact</h4>
            <ul className="space-y-3 text-base text-gray-300">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#00B8A9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@fundstream.fr</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#00B8A9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>privacy@fundstream.fr</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p className="mb-2 text-base font-medium text-gray-300">fund-stream par <span className="text-[#00B8A9]">BPC Group</span></p>
          <p>&copy; 2025 BPC Group. Tous droits réservés.</p>
          <p className="mt-3 text-xs text-gray-500">
            Build: {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || 'dev'} | Déploiement: {new Date().toISOString()}
          </p>
        </div>
      </div>
    </footer>
  );
}


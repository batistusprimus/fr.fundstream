import Header from './Header';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2d5077] text-white py-16 md:py-24 lg:py-32">
      <Header />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Trouvez le financement adapté à votre entreprise en quelques clics.
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Nous transmettons votre demande à des partenaires financiers qualifiés (banques, fintechs, courtiers). <strong>Gratuit, rapide, sans engagement.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#formulaire"
                className="inline-block bg-[#00B8A9] hover:bg-[#009688] text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-200 text-center"
              >
                Démarrer ma demande
              </a>
              <a
                href="#comment-ca-marche"
                className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-[#1E3A5F] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-center"
              >
                En savoir plus
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00B8A9]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Gratuit et sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00B8A9]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Réponse sous 48-72h</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00B8A9]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Données protégées RGPD</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00B8A9]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Partenaires vérifiés</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-[#00B8A9] to-[#008f82] rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-32 h-32 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


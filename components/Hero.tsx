import Header from './Header';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#2d5077] to-[#1E3A5F] text-white overflow-hidden">
      <Header />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Trouvez le financement adapté à votre entreprise en quelques clics.
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Nous transmettons votre demande à des partenaires financiers qualifiés (banques, fintechs, courtiers). <strong className="text-white">Gratuit, rapide, sans engagement.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#formulaire"
                className="inline-flex items-center justify-center bg-[#00B8A9] hover:bg-[#009688] text-white font-semibold px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg transform hover:scale-105"
              >
                Démarrer ma demande
              </a>
              <a
                href="#comment-ca-marche"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-[#1E3A5F] text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 text-lg"
              >
                En savoir plus
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 w-6 h-6 bg-[#00B8A9] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Gratuit et sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 w-6 h-6 bg-[#00B8A9] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Réponse sous 48-72h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 w-6 h-6 bg-[#00B8A9] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Données protégées RGPD</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 w-6 h-6 bg-[#00B8A9] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Partenaires vérifiés</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-[#00B8A9] to-[#008f82] rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-40 h-40 text-white opacity-40" fill="currentColor" viewBox="0 0 20 20">
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


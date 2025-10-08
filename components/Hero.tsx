export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#2d5077] to-[#1E3A5F] overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00B8A9] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00B8A9] rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-36 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 bg-[#00B8A9] rounded-full animate-pulse"></span>
            <span className="text-white text-sm font-medium">Trouvez votre financement professionnel</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-8">
            Le financement adapté à votre entreprise
            <span className="block mt-3 bg-gradient-to-r from-[#00B8A9] to-[#00E5D0] bg-clip-text text-transparent">
              en quelques clics
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed text-gray-100 mb-12 max-w-3xl mx-auto">
            Nous transmettons votre demande à des partenaires financiers qualifiés (banques, fintechs, courtiers). 
            <strong className="text-white block mt-2">Gratuit, rapide, sans engagement.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <a
              href="#form"
              className="group inline-flex items-center justify-center bg-gradient-to-r from-[#00B8A9] to-[#00E5D0] hover:from-[#00E5D0] hover:to-[#00B8A9] text-[#1E3A5F] font-bold px-10 py-5 rounded-xl shadow-2xl hover:shadow-[0_20px_60px_rgba(0,184,169,0.4)] transition-all duration-300 text-lg transform hover:scale-105"
            >
              Démarrer ma demande
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:border-white text-white hover:text-[#1E3A5F] font-semibold px-10 py-5 rounded-xl transition-all duration-300 text-lg"
            >
              En savoir plus
            </a>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '✓', text: 'Gratuit et sans engagement' },
              { icon: '⚡', text: 'Réponse sous 48-72h' },
              { icon: '🔒', text: 'Données protégées RGPD' },
              { icon: '✨', text: 'Partenaires vérifiés' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00B8A9] to-[#00E5D0] rounded-xl flex items-center justify-center text-xl font-bold text-[#1E3A5F] shadow-lg">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-white text-center leading-tight">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 48L60 42C120 36 240 24 360 21C480 18 600 24 720 28C840 32 960 34 1080 31C1200 28 1320 20 1380 16L1440 12V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V48Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

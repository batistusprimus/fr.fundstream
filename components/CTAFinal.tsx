export default function CTAFinal() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#1E3A5F] via-[#2d5077] to-[#1E3A5F] text-white scroll-mt-24 md:scroll-mt-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#00B8A9] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00E5D0] rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 bg-[#00B8A9] rounded-full animate-pulse"></span>
          <span className="text-white text-sm font-medium">Commencez dès maintenant</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Prêt à trouver
          <span className="block mt-2 bg-gradient-to-r from-[#00B8A9] to-[#00E5D0] bg-clip-text text-transparent">
            votre financement ?
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto">
          Démarrez votre demande en 2 minutes. Gratuit, rapide, sans engagement.
        </p>
        
        <a
          href="#formulaire"
          className="group inline-flex items-center justify-center bg-gradient-to-r from-[#00B8A9] to-[#00E5D0] hover:from-[#00E5D0] hover:to-[#00B8A9] text-[#1E3A5F] font-bold px-12 py-6 rounded-xl shadow-2xl hover:shadow-[0_20px_60px_rgba(0,184,169,0.4)] transition-all duration-300 text-xl transform hover:scale-105"
        >
          Démarrer ma demande
          <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        
        <div className="grid sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          {[
            { icon: '✓', text: 'Gratuit et sans engagement' },
            { icon: '⚡', text: 'Réponse sous 48-72h' },
            { icon: '🔒', text: 'Données protégées RGPD' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-8 h-8 bg-gradient-to-br from-[#00B8A9] to-[#00E5D0] rounded-lg flex items-center justify-center text-lg font-bold text-[#1E3A5F]">
                {item.icon}
              </div>
              <span className="font-medium text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


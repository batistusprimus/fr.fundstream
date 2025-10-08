export default function CTAFinal() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#1E3A5F] via-[#2d5077] to-[#1E3A5F] text-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          Prêt à trouver votre financement ?
        </h2>
        <p className="text-2xl text-gray-100 mb-10 leading-relaxed">
          Démarrez votre demande en 2 minutes. Gratuit, rapide, sans engagement.
        </p>
        <a
          href="#formulaire"
          className="inline-flex items-center justify-center bg-[#00B8A9] hover:bg-[#009688] text-white font-bold px-12 py-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-xl transform hover:scale-105"
        >
          Démarrer ma demande
        </a>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12 text-base">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-[#00B8A9] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium">Gratuit et sans engagement</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-[#00B8A9] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium">Réponse sous 48-72h</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-[#00B8A9] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium">Données protégées RGPD</span>
          </div>
        </div>
      </div>
    </section>
  );
}


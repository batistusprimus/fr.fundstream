export default function CTAFinal() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#1E3A5F] to-[#2d5077] text-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Prêt à trouver votre financement ?
        </h2>
        <p className="text-xl text-gray-200 mb-8">
          Démarrez votre demande en 2 minutes. Gratuit, rapide, sans engagement.
        </p>
        <a
          href="#formulaire"
          className="inline-block bg-[#00B8A9] hover:bg-[#009688] text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-200 text-lg"
        >
          Démarrer ma demande
        </a>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#00B8A9]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Gratuit et sans engagement</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#00B8A9]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Réponse sous 48-72h</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#00B8A9]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Données protégées RGPD</span>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Décrivez votre besoin',
      description: 'Remplissez un formulaire simple en 2 minutes : montant, projet, secteur d\'activité.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: '2',
      title: 'Nous transmettons votre demande',
      description: 'Votre demande est transmise à des partenaires financiers adaptés à votre profil.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      number: '3',
      title: 'Vous êtes contacté',
      description: 'Les partenaires intéressés vous contactent sous 48-72h pour étudier votre dossier.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-[#00B8A9]/10 to-[#00E5D0]/10 rounded-full px-5 py-2 mb-6">
            <span className="text-[#00B8A9] font-semibold text-sm">PROCESSUS SIMPLE</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A5F] mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Un processus simple en 3 étapes pour trouver le financement adapté à votre entreprise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#00B8A9] to-[#00E5D0] text-[#1E3A5F] rounded-2xl flex items-center justify-center text-4xl font-bold shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                    {step.number}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white border-4 border-[#00B8A9] rounded-xl flex items-center justify-center text-[#00B8A9] shadow-lg">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-[#64748B] leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-1 bg-gradient-to-r from-[#00B8A9] to-transparent">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-[#E2E8F0]"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#form"
            className="group inline-flex items-center justify-center bg-gradient-to-r from-[#00B8A9] to-[#00E5D0] hover:from-[#00E5D0] hover:to-[#00B8A9] text-[#1E3A5F] font-bold px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg transform hover:scale-105"
          >
            Démarrer ma demande
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}


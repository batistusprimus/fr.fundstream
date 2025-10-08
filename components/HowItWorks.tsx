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
    <section id="comment-ca-marche" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Un processus simple en 3 étapes pour trouver le financement adapté à votre entreprise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#00B8A9] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  {step.number}
                </div>
                <div className="mb-4 text-[#00B8A9]">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#6B7280]">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#00B8A9] to-gray-300">
                  <svg className="absolute right-0 top-[-4px]" width="10" height="10" viewBox="0 0 10 10">
                    <polygon points="0,0 10,5 0,10" fill="#d1d5db" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#formulaire"
            className="inline-block bg-[#00B8A9] hover:bg-[#009688] text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-200"
          >
            Démarrer ma demande
          </a>
        </div>
      </div>
    </section>
  );
}


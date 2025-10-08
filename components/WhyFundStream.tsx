export default function WhyFundStream() {
  const benefits = [
    {
      title: 'Gain de temps',
      description: 'Évitez de contacter plusieurs banques et courtiers. Nous le faisons pour vous.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      color: 'text-[#00B8A9]',
    },
    {
      title: 'Accès facilité',
      description: 'Accédez à un réseau de partenaires financiers (banques, fintechs, courtiers) en une seule demande.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      ),
      color: 'text-[#1E3A5F]',
    },
    {
      title: 'Gratuit et sans engagement',
      description: 'Notre service est 100% gratuit. Vous n\'êtes jamais obligé d\'accepter une offre.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      ),
      color: 'text-[#10B981]',
    },
    {
      title: 'Données protégées',
      description: 'Vos données sont protégées et ne sont transmises qu\'aux partenaires que vous autorisez.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      color: 'text-[#00B8A9]',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A5F] mb-6">
            Pourquoi fund-stream ?
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Une solution simple et efficace pour accéder au financement professionnel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E2E8F0] hover:border-[#00B8A9] transform hover:-translate-y-2"
            >
              <div className={`${benefit.color} mb-6`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">
                {benefit.title}
              </h3>
              <p className="text-[#64748B] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


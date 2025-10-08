export default function Testimonials() {
  const stats = [
    {
      value: '48-72h',
      label: 'Délai de réponse typique',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: 'Des centaines',
      label: 'De demandes traitées chaque mois',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      value: 'Utilisé par',
      label: 'Des centaines d\'entreprises',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#F8FAFC] via-white to-[#EFF6FF] scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A5F] mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
            Rejoignez les centaines d&apos;entreprises qui ont trouvé leur financement grâce à fund-stream
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#E2E8F0] hover:border-[#00B8A9] transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00B8A9]/10 to-[#00E5D0]/10 rounded-2xl flex items-center justify-center text-[#00B8A9] group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
              </div>
              
              {/* Value */}
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-[#00B8A9] to-[#00E5D0] bg-clip-text text-transparent mb-4 text-center">
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="text-base lg:text-lg text-[#64748B] font-medium text-center leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


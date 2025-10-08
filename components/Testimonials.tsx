export default function Testimonials() {
  const stats = [
    {
      value: '48-72h',
      label: 'Délai de réponse typique',
    },
    {
      value: 'Des centaines',
      label: 'De demandes traitées chaque mois',
    },
    {
      value: 'Utilisé par',
      label: 'Des centaines d\'entreprises',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#F8FAFC] via-white to-[#EFF6FF] scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-[#00B8A9]/10 to-[#00E5D0]/10 rounded-full px-5 py-2 mb-6">
            <span className="text-[#00B8A9] font-semibold text-sm">TÉMOIGNAGES</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A5F] mb-6">
            Ils nous font confiance
          </h2>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-[#00B8A9] to-[#00E5D0] bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-lg text-[#64748B] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


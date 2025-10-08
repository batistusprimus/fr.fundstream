export default function Testimonials() {
  const testimonials = [
    {
      quote: "Nous avons été contactés par 2 prêteurs en 48h. Cela nous a fait gagner des semaines de recherche.",
      author: "Jean M.",
      position: "Gérant entreprise BTP",
      location: "Île-de-France",
    },
    {
      quote: "Processus simple, sans tracas. Nous avons obtenu le financement nécessaire pour notre développement.",
      author: "Sophie L.",
      position: "Dirigeante commerce",
      location: "Auvergne-Rhône-Alpes",
    },
  ];

  const stats = [
    {
      value: '48-72h',
      label: 'Délai de réponse moyen',
    },
    {
      value: '1 247',
      label: 'Demandes traitées le mois dernier',
    },
    {
      value: '500+',
      label: 'Entreprises nous font confiance',
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

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-2xl shadow-xl relative border-2 border-[#E2E8F0] hover:border-[#00B8A9] hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-[#00B8A9]/10 to-[#00E5D0]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#00B8A9]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-xl text-[#1E3A5F] mb-8 relative z-10 italic leading-relaxed pt-20">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00B8A9] to-[#00E5D0] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.author[0]}
                </div>
                <div>
                  <p className="font-bold text-[#1E3A5F] text-lg">{testimonial.author}</p>
                  <p className="text-base text-[#64748B]">{testimonial.position}, {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
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


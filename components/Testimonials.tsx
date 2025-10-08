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
    <section className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-6">
            Ils nous font confiance
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-xl relative border border-[#E2E8F0] hover:shadow-2xl transition-shadow duration-300"
            >
              <svg className="absolute top-8 left-8 w-12 h-12 text-[#00B8A9] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl text-[#1E3A5F] mb-8 relative z-10 italic leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="relative z-10">
                <p className="font-bold text-[#1E3A5F] text-lg">{testimonial.author}</p>
                <p className="text-base text-[#64748B]">{testimonial.position}, {testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-[#00B8A9] to-[#009688] bg-clip-text text-transparent mb-4">
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


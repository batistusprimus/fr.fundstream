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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
            Ils nous font confiance
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F5F7FA] p-8 rounded-xl shadow-md relative"
            >
              <svg className="absolute top-6 left-6 w-10 h-10 text-[#00B8A9] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg text-[#1E3A5F] mb-6 relative z-10 italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="relative z-10">
                <p className="font-semibold text-[#1E3A5F]">{testimonial.author}</p>
                <p className="text-sm text-[#6B7280]">{testimonial.position}, {testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#00B8A9] mb-2">
                {stat.value}
              </div>
              <div className="text-[#6B7280]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


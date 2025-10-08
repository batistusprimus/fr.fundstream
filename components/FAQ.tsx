'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Est-ce vraiment gratuit ?',
      answer: 'Oui, notre service est 100% gratuit pour les entreprises. Nous sommes rémunérés par nos partenaires financiers uniquement s\'ils vous contactent.',
    },
    {
      question: 'Combien de partenaires vont me contacter ?',
      answer: 'Cela dépend de votre profil et de votre demande. En moyenne, 1 à 3 partenaires vous contactent sous 48-72h. Certains profils peuvent recevoir plus ou moins de contacts.',
    },
    {
      question: 'Suis-je obligé d\'accepter une offre ?',
      answer: 'Non, vous n\'avez aucune obligation. Vous êtes libre de comparer les offres et de choisir celle qui vous convient, ou de refuser toutes les offres.',
    },
    {
      question: 'Mes données sont-elles protégées ?',
      answer: 'Oui, vos données sont protégées conformément au RGPD. Elles ne sont transmises qu\'aux partenaires que vous avez autorisés via le formulaire de consentement.',
    },
    {
      question: 'Quels types de partenaires financiers ?',
      answer: 'Nous travaillons avec des banques, fintechs, courtiers en financement professionnel, et plateformes de prêts aux PME. Tous nos partenaires sont vérifiés et régulés.',
    },
    {
      question: 'Quel délai pour recevoir une réponse ?',
      answer: 'Les partenaires intéressés vous contactent généralement sous 48-72h. Le délai peut varier selon la complexité de votre demande et la disponibilité des partenaires.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#00B8A9]/10 to-[#00E5D0]/10 rounded-full px-5 py-2 mb-6">
            <span className="text-[#00B8A9] font-semibold text-sm">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A5F] mb-6">
            Questions fréquentes
          </h2>
          <p className="text-xl text-[#64748B]">
            Tout ce que vous devez savoir sur notre service
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 transition-all duration-300 ${
                openIndex === index 
                  ? 'border-[#00B8A9] shadow-xl' 
                  : 'border-[#E2E8F0] hover:border-[#00B8A9]/50'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#F8FAFC] transition-colors"
              >
                <span className="text-xl font-bold text-[#1E3A5F] pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-[#00B8A9] rotate-180' 
                    : 'bg-[#F8FAFC]'
                }`}>
                  <svg
                    className={`w-6 h-6 transition-colors ${
                      openIndex === index ? 'text-white' : 'text-[#00B8A9]'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 bg-[#F8FAFC]/50">
                  <p className="text-[#64748B] text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


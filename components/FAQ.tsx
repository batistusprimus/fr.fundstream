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
    <section className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-[#6B7280]">
            Tout ce que vous devez savoir sur notre service
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-[#1E3A5F] pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-[#00B8A9] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-[#6B7280] leading-relaxed">
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


import Link from 'next/link';

export const metadata = {
  title: 'Mentions Légales | fund-stream',
  description: 'Mentions légales de fund-stream - BP Les Cannisses KFT',
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-[#00B8A9] hover:text-[#1E3A5F] font-medium transition-colors mb-6"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
            Mentions Légales
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Éditeur du site</h2>
            <p className="text-[#64748B] leading-relaxed mb-3">
              <strong className="text-[#1E3A5F]">Raison sociale :</strong> BP Les Cannisses KFT
            </p>
            <p className="text-[#64748B] leading-relaxed mb-3">
              <strong className="text-[#1E3A5F]">Forme juridique :</strong> Société à responsabilité limitée (KFT) - Droit hongrois
            </p>
            <p className="text-[#64748B] leading-relaxed mb-3">
              <strong className="text-[#1E3A5F]">Numéro d&apos;enregistrement :</strong> Cg.01-09-420052
            </p>
            <p className="text-[#64748B] leading-relaxed mb-3">
              <strong className="text-[#1E3A5F]">Numéro de TVA intracommunautaire :</strong> HU32359815
            </p>
            <p className="text-[#64748B] leading-relaxed mb-3">
              <strong className="text-[#1E3A5F]">Numéro d&apos;identification fiscale :</strong> 32359815142
            </p>
            <p className="text-[#64748B] leading-relaxed">
              <strong className="text-[#1E3A5F]">Siège social :</strong> 1077 Budapest, Rózsa utca 38/A, Hongrie
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Directeur de la publication</h2>
            <p className="text-[#64748B] leading-relaxed mb-3">
              <strong className="text-[#1E3A5F]">Nom :</strong> Baptiste Piocelle
            </p>
            <p className="text-[#64748B] leading-relaxed">
              <strong className="text-[#1E3A5F]">Qualité :</strong> CEO
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Contact</h2>
            <p className="text-[#64748B] leading-relaxed mb-3">
              <strong className="text-[#1E3A5F]">Email :</strong>{' '}
              <a href="mailto:baptiste@bpcorp.eu" className="text-[#00B8A9] hover:underline">
                baptiste@bpcorp.eu
              </a>
            </p>
            <p className="text-[#64748B] leading-relaxed">
              <strong className="text-[#1E3A5F]">Protection des données :</strong>{' '}
              <a href="mailto:baptiste@bpcorp.eu" className="text-[#00B8A9] hover:underline">
                baptiste@bpcorp.eu
              </a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Hébergement</h2>
            <p className="text-[#64748B] leading-relaxed mb-3">
              <strong className="text-[#1E3A5F]">Hébergeur :</strong> Vercel Inc.
            </p>
            <p className="text-[#64748B] leading-relaxed mb-3">
              <strong className="text-[#1E3A5F]">Siège social :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, United States
            </p>
            <p className="text-[#64748B] leading-relaxed">
              <strong className="text-[#1E3A5F]">Site web :</strong>{' '}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#00B8A9] hover:underline">
                vercel.com
              </a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Propriété intellectuelle</h2>
            <p className="text-[#64748B] leading-relaxed">
              Le site fund-stream et l&apos;ensemble de son contenu (textes, images, logos, graphismes) sont la propriété exclusive de BP Les Cannisses KFT. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Données personnelles</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Pour toute question relative au traitement de vos données personnelles, veuillez consulter notre{' '}
              <Link href="/politique-de-confidentialite" className="text-[#00B8A9] hover:underline font-semibold">
                Politique de confidentialité
              </Link>{' '}
              ou nous contacter à{' '}
              <a href="mailto:baptiste@bpcorp.eu" className="text-[#00B8A9] hover:underline">
                baptiste@bpcorp.eu
              </a>.
            </p>
            <p className="text-[#64748B] leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition au traitement de vos données personnelles.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Loi applicable</h2>
            <p className="text-[#64748B] leading-relaxed">
              Le présent site est soumis au droit hongrois. En cas de litige, les tribunaux hongrois seront seuls compétents.
            </p>
          </section>

          <div className="border-t border-[#E2E8F0] pt-8 mt-12">
            <p className="text-sm text-[#64748B] italic">
              Dernière mise à jour : 8 octobre 2025
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}


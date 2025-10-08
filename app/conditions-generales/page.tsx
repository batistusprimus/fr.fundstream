import Link from 'next/link';

export const metadata = {
  title: 'Conditions Générales d\'Utilisation | fund-stream',
  description: 'Conditions générales d\'utilisation du service fund-stream',
};

export default function ConditionsGenerales() {
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
            Conditions Générales d&apos;Utilisation
          </h1>
          <p className="text-[#64748B] italic">Dernière mise à jour : 8 octobre 2025</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">1. Présentation du service</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              fund-stream est un service de mise en relation entre des entreprises cherchant un financement professionnel et des partenaires financiers (banques, fintechs, courtiers en financement).
            </p>
            <p className="text-[#64748B] leading-relaxed mb-2">
              <strong className="text-[#1E3A5F]">Éditeur :</strong> BP Les Cannisses KFT
            </p>
            <p className="text-[#64748B] leading-relaxed mb-2">
              <strong className="text-[#1E3A5F]">Siège social :</strong> 1077 Budapest, Rózsa utca 38/A, Hongrie
            </p>
            <p className="text-[#64748B] leading-relaxed mb-2">
              <strong className="text-[#1E3A5F]">Email :</strong>{' '}
              <a href="mailto:baptiste@bpcorp.eu" className="text-[#00B8A9] hover:underline">
                baptiste@bpcorp.eu
              </a>
            </p>
            <p className="text-[#64748B] leading-relaxed">
              <strong className="text-[#1E3A5F]">Numéro de TVA :</strong> HU32359815
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">2. Objet</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Les présentes Conditions Générales d&apos;Utilisation (CGU) ont pour objet de définir les modalités et conditions d&apos;utilisation du site fr.fundstream.bpcorp.eu.
            </p>
            <p className="text-[#64748B] leading-relaxed">
              L&apos;utilisation du site implique l&apos;acceptation pleine et entière des présentes CGU.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">3. Nature du service</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              fund-stream est un <strong className="text-[#1E3A5F]">service de mise en relation</strong>. Nous ne sommes pas :
            </p>
            <ul className="list-none space-y-2 text-[#64748B]">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">❌</span>
                <span>Un prêteur ou un établissement de crédit</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">❌</span>
                <span>Un courtier en opérations de banque et services de paiement (COBSP)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">❌</span>
                <span>Un intermédiaire en financement participatif (IFP)</span>
              </li>
            </ul>
            <p className="text-[#64748B] leading-relaxed mt-4">
              Nous ne prenons <strong className="text-[#1E3A5F]">aucune décision de crédit</strong> et ne garantissons <strong className="text-[#1E3A5F]">aucune approbation ou offre de financement</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">4. Fonctionnement du service</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">4.1 Soumission d&apos;une demande</h3>
              <p className="text-[#64748B] leading-relaxed mb-2">
                L&apos;utilisateur remplit un formulaire en ligne en fournissant :
              </p>
              <ul className="list-disc list-inside space-y-1 text-[#64748B]">
                <li>Des informations sur son entreprise</li>
                <li>Des informations sur son besoin de financement</li>
                <li>Ses coordonnées de contact</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">4.2 Transmission aux partenaires</h3>
              <p className="text-[#64748B] leading-relaxed">
                Avec le consentement explicite de l&apos;utilisateur, nous transmettons sa demande à des partenaires financiers sélectionnés qui peuvent répondre à son besoin.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">4.3 Contact par les partenaires</h3>
              <p className="text-[#64748B] leading-relaxed">
                Les partenaires intéressés contactent directement l&apos;utilisateur pour étudier sa demande et, le cas échéant, lui proposer une offre de financement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">4.4 Relation entre l&apos;utilisateur et les partenaires</h3>
              <p className="text-[#64748B] leading-relaxed">
                fund-stream n&apos;intervient pas dans la relation entre l&apos;utilisateur et les partenaires financiers. Toute négociation, contractualisation et relation commerciale se fait directement entre l&apos;utilisateur et le partenaire.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">5. Gratuité du service</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Le service fund-stream est <strong className="text-[#1E3A5F]">100% gratuit</strong> pour les utilisateurs finaux (entreprises cherchant un financement).
            </p>
            <p className="text-[#64748B] leading-relaxed">
              fund-stream est rémunéré par les partenaires financiers uniquement lorsqu&apos;ils contactent un utilisateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">6. Aucune garantie de résultat</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              fund-stream ne garantit pas :
            </p>
            <ul className="list-none space-y-2 text-[#64748B]">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">❌</span>
                <span>Qu&apos;un ou plusieurs partenaires contacteront l&apos;utilisateur</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">❌</span>
                <span>Qu&apos;une offre de financement sera proposée</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">❌</span>
                <span>Qu&apos;une offre de financement sera acceptée</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">❌</span>
                <span>Un délai précis de réponse des partenaires</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">❌</span>
                <span>Un montant, un taux ou des conditions de financement spécifiques</span>
              </li>
            </ul>
            <p className="text-[#64748B] leading-relaxed mt-4">
              Les délais de réponse indiqués (48-72h) sont des <strong className="text-[#1E3A5F]">délais typiques</strong> et peuvent varier selon les partenaires et le profil de l&apos;utilisateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">7. Obligations de l&apos;utilisateur</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              L&apos;utilisateur s&apos;engage à :
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#64748B]">
              <li>Fournir des informations <strong className="text-[#1E3A5F]">exactes, complètes et à jour</strong></li>
              <li>Ne pas utiliser le service à des fins frauduleuses</li>
              <li>Ne pas soumettre de demandes multiples ou abusives</li>
              <li>Répondre aux sollicitations des partenaires de manière professionnelle</li>
              <li>Respecter les présentes CGU et la législation en vigueur</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">8. Responsabilité</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">8.1 Responsabilité de fund-stream</h3>
              <p className="text-[#64748B] leading-relaxed mb-4">
                fund-stream met en œuvre tous les moyens raisonnables pour assurer le bon fonctionnement du site et la transmission des demandes aux partenaires.
              </p>
              <p className="text-[#64748B] leading-relaxed mb-3">
                Toutefois, fund-stream ne saurait être tenu responsable :
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#64748B]">
                <li>Des décisions de crédit prises par les partenaires</li>
                <li>Des offres proposées ou refusées par les partenaires</li>
                <li>Des délais de réponse des partenaires</li>
                <li>Des interruptions ou dysfonctionnements techniques du site</li>
                <li>Des dommages directs ou indirects résultant de l&apos;utilisation du service</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">8.2 Responsabilité des partenaires</h3>
              <p className="text-[#64748B] leading-relaxed mb-3">
                Les partenaires financiers sont seuls responsables :
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#64748B]">
                <li>De l&apos;étude des demandes de financement</li>
                <li>Des décisions de crédit</li>
                <li>Des offres proposées</li>
                <li>De la relation commerciale avec l&apos;utilisateur</li>
                <li>Du respect de la réglementation applicable (Code monétaire et financier, etc.)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">9. Données personnelles</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Le traitement des données personnelles est régi par notre{' '}
              <Link href="/politique-de-confidentialite" className="text-[#00B8A9] font-semibold hover:underline">
                Politique de confidentialité
              </Link>.
            </p>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Conformément au RGPD, l&apos;utilisateur dispose d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition au traitement de ses données personnelles.
            </p>
            <p className="text-[#64748B] leading-relaxed">
              Pour exercer ces droits :{' '}
              <a href="mailto:baptiste@bpcorp.eu" className="text-[#00B8A9] hover:underline">
                baptiste@bpcorp.eu
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">10. Propriété intellectuelle</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Le site fund-stream et l&apos;ensemble de son contenu (textes, images, logos, graphismes, code source) sont la propriété exclusive de BP Les Cannisses KFT.
            </p>
            <p className="text-[#64748B] leading-relaxed">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">11. Liens hypertextes</h2>
            <p className="text-[#64748B] leading-relaxed">
              Le site peut contenir des liens vers des sites tiers. fund-stream n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">12. Modification des CGU</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              fund-stream se réserve le droit de modifier les présentes CGU à tout moment. La date de dernière mise à jour est indiquée en haut de cette page.
            </p>
            <p className="text-[#64748B] leading-relaxed">
              L&apos;utilisation du site après modification des CGU vaut acceptation des nouvelles CGU.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">13. Droit applicable et juridiction</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Les présentes CGU sont soumises au <strong className="text-[#1E3A5F]">droit hongrois</strong>.
            </p>
            <p className="text-[#64748B] leading-relaxed">
              En cas de litige, les parties s&apos;efforceront de trouver une solution amiable. À défaut, les tribunaux hongrois seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">14. Contact</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Pour toute question relative aux présentes CGU :
            </p>
            <p className="text-[#64748B] leading-relaxed mb-2">
              <strong className="text-[#1E3A5F]">Email :</strong>{' '}
              <a href="mailto:baptiste@bpcorp.eu" className="text-[#00B8A9] hover:underline">
                baptiste@bpcorp.eu
              </a>
            </p>
            <p className="text-[#64748B] leading-relaxed">
              <strong className="text-[#1E3A5F]">Adresse :</strong> BP Les Cannisses KFT, 1077 Budapest, Rózsa utca 38/A, Hongrie
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

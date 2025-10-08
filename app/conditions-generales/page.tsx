import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Conditions générales d\'utilisation | fund-stream',
  description: 'Conditions générales d\'utilisation du service fund-stream',
};

export default function ConditionsGenerales() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Link href="/" className="text-[#00B8A9] hover:underline mb-8 inline-block">
            ← Retour à l&apos;accueil
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-8">
            Conditions générales d&apos;utilisation
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-[#6B7280] mb-6">
              <strong>Date de mise à jour :</strong> 7 octobre 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">1. Présentation du service</h2>
              <p className="text-[#6B7280] mb-4">
                fund-stream est un service de mise en relation entre des entreprises recherchant un financement professionnel et des partenaires financiers qualifiés (banques, fintechs, courtiers).
              </p>
              <p className="text-[#6B7280] mb-4">
                Le service est édité par <strong>BPC Group</strong>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">2. Acceptation des CGU</h2>
              <p className="text-[#6B7280] mb-4">
                L&apos;utilisation du site fundstreamfr.bpcorp.eu et la soumission d&apos;une demande de financement impliquent l&apos;acceptation pleine et entière des présentes conditions générales d&apos;utilisation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">3. Description du service</h2>
              <p className="text-[#6B7280] mb-4">
                fund-stream propose les services suivants :
              </p>
              <ul className="list-disc list-inside text-[#6B7280] mb-4 space-y-2">
                <li>Collecte de demandes de financement via un formulaire en ligne</li>
                <li>Transmission de ces demandes à des partenaires financiers adaptés au profil de l&apos;entreprise</li>
                <li>Mise en relation entre l&apos;entreprise et les partenaires intéressés</li>
              </ul>
              <p className="text-[#6B7280] mb-4">
                <strong>Important :</strong> fund-stream est un service de mise en relation. Nous ne garantissons pas :
              </p>
              <ul className="list-disc list-inside text-[#6B7280] mb-4 space-y-2">
                <li>Le nombre d&apos;offres de financement que vous recevrez</li>
                <li>L&apos;acceptation de votre demande par les partenaires</li>
                <li>Un délai précis de réponse (bien que nous indiquions un délai moyen de 48-72h)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">4. Gratuité du service</h2>
              <p className="text-[#6B7280] mb-4">
                Le service fund-stream est <strong>100% gratuit</strong> pour les entreprises utilisatrices.
              </p>
              <p className="text-[#6B7280] mb-4">
                fund-stream est rémunéré par les partenaires financiers uniquement en cas de mise en relation réussie (modèle Pay-Per-Lead).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">5. Obligations de l&apos;utilisateur</h2>
              <p className="text-[#6B7280] mb-4">
                En utilisant fund-stream, vous vous engagez à :
              </p>
              <ul className="list-disc list-inside text-[#6B7280] mb-4 space-y-2">
                <li>Fournir des informations exactes, complètes et à jour</li>
                <li>Ne pas utiliser le service à des fins frauduleuses</li>
                <li>Ne pas soumettre de demandes multiples pour la même entreprise</li>
                <li>Répondre aux sollicitations des partenaires financiers de bonne foi</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">6. Limitation de responsabilité</h2>
              <p className="text-[#6B7280] mb-4">
                fund-stream ne peut être tenu responsable :
              </p>
              <ul className="list-disc list-inside text-[#6B7280] mb-4 space-y-2">
                <li>Du refus d&apos;une demande de financement par les partenaires</li>
                <li>Des conditions proposées par les partenaires financiers</li>
                <li>De l&apos;exécution des contrats de financement conclus avec les partenaires</li>
                <li>De l&apos;interruption temporaire du service pour maintenance</li>
                <li>De la perte de données due à un cas de force majeure</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">7. Partenaires financiers</h2>
              <p className="text-[#6B7280] mb-4">
                fund-stream travaille avec des partenaires financiers régulés et vérifiés. Cependant, fund-stream n&apos;est pas responsable des pratiques commerciales de ses partenaires.
              </p>
              <p className="text-[#6B7280] mb-4">
                Les relations contractuelles (contrat de prêt, conditions de financement, etc.) sont établies directement entre l&apos;utilisateur et le partenaire financier.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">8. Protection des données personnelles</h2>
              <p className="text-[#6B7280] mb-4">
                Le traitement de vos données personnelles est soumis à notre <Link href="/politique-de-confidentialite" className="text-[#00B8A9] underline">Politique de confidentialité</Link>, conforme au RGPD.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">9. Propriété intellectuelle</h2>
              <p className="text-[#6B7280] mb-4">
                Tous les éléments du site fundstreamfr.bpcorp.eu (textes, images, logos, design) sont la propriété exclusive de BPC Group et sont protégés par les lois sur la propriété intellectuelle.
              </p>
              <p className="text-[#6B7280] mb-4">
                Toute reproduction, représentation ou utilisation non autorisée est interdite.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">10. Modification des CGU</h2>
              <p className="text-[#6B7280] mb-4">
                BPC Group se réserve le droit de modifier les présentes CGU à tout moment. Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">11. Droit applicable et juridiction</h2>
              <p className="text-[#6B7280] mb-4">
                Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">12. Contact</h2>
              <p className="text-[#6B7280] mb-4">
                Pour toute question concernant ces CGU, contactez-nous :
              </p>
              <p className="text-[#6B7280] mb-4">
                Email : <a href="mailto:contact@fundstream.fr" className="text-[#00B8A9] underline">contact@fundstream.fr</a>
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="text-[#00B8A9] hover:underline">
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}


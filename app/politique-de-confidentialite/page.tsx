import Link from 'next/link';

export const metadata = {
  title: 'Politique de confidentialité | fund-stream',
  description: 'Politique de confidentialité et protection des données',
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Link href="/" className="text-[#00B8A9] hover:underline mb-8 inline-block">
            ← Retour à l&apos;accueil
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-8">
            Politique de confidentialité
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-[#6B7280] mb-6">
              <strong>Date de mise à jour :</strong> 7 octobre 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">1. Responsable du traitement</h2>
              <p className="text-[#6B7280] mb-4">
                Le responsable du traitement des données personnelles collectées sur le site fundstreamfr.bpcorp.eu est :
              </p>
              <p className="text-[#6B7280] mb-4">
                <strong>BPC Group</strong><br />
                Email : privacy@fundstream.fr
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">2. Données collectées</h2>
              <p className="text-[#6B7280] mb-4">
                Nous collectons les données suivantes lorsque vous remplissez notre formulaire de demande de financement :
              </p>
              <ul className="list-disc list-inside text-[#6B7280] mb-4 space-y-2">
                <li>Informations sur votre besoin de financement (montant, projet)</li>
                <li>Informations sur votre entreprise (secteur, ancienneté, nom)</li>
                <li>Vos coordonnées professionnelles (nom, prénom, email, téléphone)</li>
                <li>Données de consentement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">3. Finalité du traitement</h2>
              <p className="text-[#6B7280] mb-4">
                Vos données sont collectées pour :
              </p>
              <ul className="list-disc list-inside text-[#6B7280] mb-4 space-y-2">
                <li>Transmettre votre demande de financement à nos partenaires financiers qualifiés</li>
                <li>Vous permettre d&apos;être contacté par les partenaires intéressés</li>
                <li>Améliorer nos services (avec votre consentement)</li>
                <li>Vous envoyer des informations commerciales (si vous avez accepté)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">4. Base légale du traitement</h2>
              <p className="text-[#6B7280] mb-4">
                Le traitement de vos données est basé sur :
              </p>
              <ul className="list-disc list-inside text-[#6B7280] mb-4 space-y-2">
                <li><strong>Votre consentement explicite</strong> pour la transmission de vos données aux partenaires financiers</li>
                <li><strong>Notre intérêt légitime</strong> à vous fournir un service de mise en relation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">5. Destinataires des données</h2>
              <p className="text-[#6B7280] mb-4">
                Vos données sont transmises uniquement :
              </p>
              <ul className="list-disc list-inside text-[#6B7280] mb-4 space-y-2">
                <li>Aux partenaires financiers (banques, fintechs, courtiers) que vous avez autorisés via le formulaire de consentement</li>
                <li>À nos prestataires techniques qui hébergent et sécurisent nos services (avec des garanties contractuelles appropriées)</li>
              </ul>
              <p className="text-[#6B7280] mb-4">
                Nous ne vendons jamais vos données à des tiers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">6. Durée de conservation</h2>
              <p className="text-[#6B7280] mb-4">
                Vos données sont conservées pendant :
              </p>
              <ul className="list-disc list-inside text-[#6B7280] mb-4 space-y-2">
                <li><strong>3 ans</strong> pour les prospects non convertis</li>
                <li><strong>5 ans</strong> pour les prospects ayant accepté une offre de financement (conformément aux obligations légales)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">7. Vos droits</h2>
              <p className="text-[#6B7280] mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-[#6B7280] mb-4 space-y-2">
                <li><strong>Droit d&apos;accès :</strong> Obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> Corriger vos données inexactes</li>
                <li><strong>Droit à l&apos;effacement :</strong> Demander la suppression de vos données</li>
                <li><strong>Droit d&apos;opposition :</strong> Vous opposer au traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                <li><strong>Droit de retirer votre consentement :</strong> À tout moment</li>
              </ul>
              <p className="text-[#6B7280] mb-4">
                Pour exercer vos droits, contactez-nous à : <a href="mailto:privacy@fundstream.fr" className="text-[#00B8A9] underline">privacy@fundstream.fr</a>
              </p>
              <p className="text-[#6B7280] mb-4">
                Vous avez également le droit de déposer une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">8. Sécurité des données</h2>
              <p className="text-[#6B7280] mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre :
              </p>
              <ul className="list-disc list-inside text-[#6B7280] mb-4 space-y-2">
                <li>L&apos;accès non autorisé</li>
                <li>La perte accidentelle</li>
                <li>La destruction malveillante</li>
                <li>Les modifications non autorisées</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">9. Cookies</h2>
              <p className="text-[#6B7280] mb-4">
                Notre site utilise des cookies nécessaires au fonctionnement du service. Nous n&apos;utilisons pas de cookies publicitaires sans votre consentement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">10. Modifications</h2>
              <p className="text-[#6B7280] mb-4">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">11. Contact</h2>
              <p className="text-[#6B7280] mb-4">
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, contactez-nous :
              </p>
              <p className="text-[#6B7280] mb-4">
                Email : <a href="mailto:privacy@fundstream.fr" className="text-[#00B8A9] underline">privacy@fundstream.fr</a>
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
    </main>
  );
}


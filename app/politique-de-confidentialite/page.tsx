import Link from 'next/link';

export const metadata = {
  title: 'Politique de Confidentialité | fund-stream',
  description: 'Politique de confidentialité et protection des données personnelles - fund-stream',
};

export default function PolitiqueConfidentialite() {
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
            Politique de Confidentialité
          </h1>
          <p className="text-[#64748B] italic">Dernière mise à jour : 8 octobre 2025</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">1. Introduction</h2>
            <p className="text-[#64748B] leading-relaxed">
              BP Les Cannisses KFT (&quot;fund-stream&quot;, &quot;nous&quot;, &quot;notre&quot;) s&apos;engage à protéger votre vie privée. Cette politique explique comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre site web fr.fundstream.bpcorp.eu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">2. Responsable du traitement</h2>
            <p className="text-[#64748B] leading-relaxed mb-3">
              <strong className="text-[#1E3A5F]">Raison sociale :</strong> BP Les Cannisses KFT
            </p>
            <p className="text-[#64748B] leading-relaxed mb-3">
              <strong className="text-[#1E3A5F]">Adresse :</strong> 1077 Budapest, Rózsa utca 38/A, Hongrie
            </p>
            <p className="text-[#64748B] leading-relaxed mb-3">
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
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">3. Données collectées</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Nous collectons les données suivantes lorsque vous remplissez notre formulaire :
            </p>
            
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">Données d&apos;identification :</h3>
              <ul className="list-disc list-inside space-y-2 text-[#64748B]">
                <li>Nom et prénom</li>
                <li>Email professionnel</li>
                <li>Numéro de téléphone</li>
                <li>Nom de l&apos;entreprise</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">Données relatives à votre demande :</h3>
              <ul className="list-disc list-inside space-y-2 text-[#64748B]">
                <li>Montant de financement recherché</li>
                <li>Type de projet</li>
                <li>Secteur d&apos;activité</li>
                <li>Ancienneté de l&apos;entreprise</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">Données techniques :</h3>
              <ul className="list-disc list-inside space-y-2 text-[#64748B]">
                <li>Adresse IP</li>
                <li>Type de navigateur</li>
                <li>Système d&apos;exploitation</li>
                <li>Pages visitées</li>
                <li>Durée de visite</li>
                <li>Source de trafic (UTM)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">4. Finalités du traitement</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Vos données sont collectées pour :
            </p>
            <ol className="list-decimal list-inside space-y-3 text-[#64748B]">
              <li><strong className="text-[#1E3A5F]">Mise en relation avec des partenaires financiers :</strong> Transmettre votre demande à des partenaires sélectionnés (banques, fintechs, courtiers) qui peuvent répondre à votre besoin de financement.</li>
              <li><strong className="text-[#1E3A5F]">Gestion de la relation client :</strong> Vous contacter pour des informations complémentaires, suivre votre demande, répondre à vos questions.</li>
              <li><strong className="text-[#1E3A5F]">Amélioration de nos services :</strong> Analyser l&apos;utilisation du site, améliorer l&apos;expérience utilisateur, optimiser notre service.</li>
              <li><strong className="text-[#1E3A5F]">Obligations légales :</strong> Respecter nos obligations légales et réglementaires (lutte contre la fraude, conformité RGPD).</li>
              <li><strong className="text-[#1E3A5F]">Marketing (avec votre consentement) :</strong> Vous envoyer des conseils et offres pour optimiser votre recherche de financement (uniquement si vous avez coché la case optionnelle).</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">5. Base légale du traitement</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Le traitement de vos données repose sur :
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#64748B]">
              <li><strong className="text-[#1E3A5F]">Votre consentement :</strong> Pour la transmission de vos données aux partenaires financiers (case obligatoire cochée).</li>
              <li><strong className="text-[#1E3A5F]">Notre intérêt légitime :</strong> Pour l&apos;analyse du site et l&apos;amélioration de nos services.</li>
              <li><strong className="text-[#1E3A5F]">Obligations légales :</strong> Pour la conformité réglementaire et la lutte contre la fraude.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">6. Destinataires des données</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Vos données peuvent être transmises à :
            </p>
            
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">Partenaires financiers :</h3>
              <p className="text-[#64748B] leading-relaxed">
                Avec votre consentement explicite, nous transmettons vos données à des partenaires financiers sélectionnés (banques, fintechs, courtiers en financement professionnel) qui peuvent répondre à votre demande. Ces partenaires sont situés en France et dans l&apos;Union Européenne.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">Prestataires techniques :</h3>
              <ul className="list-disc list-inside space-y-2 text-[#64748B]">
                <li>Vercel (hébergement du site)</li>
                <li>GoHighLevel (gestion des leads)</li>
                <li>Google Analytics (analyse du trafic)</li>
                <li>Meta (Facebook/Instagram - publicité)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">Autorités :</h3>
              <p className="text-[#64748B] leading-relaxed">
                En cas d&apos;obligation légale, nous pouvons transmettre vos données aux autorités compétentes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">7. Transferts hors UE</h2>
            <p className="text-[#64748B] leading-relaxed">
              Certains de nos prestataires (Google, Meta, Vercel) peuvent transférer vos données hors de l&apos;Union Européenne, notamment aux États-Unis. Ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types de la Commission Européenne, Privacy Shield, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">8. Durée de conservation</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Nous conservons vos données :
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#64748B]">
              <li><strong className="text-[#1E3A5F]">Leads non convertis :</strong> 3 ans à compter de votre demande</li>
              <li><strong className="text-[#1E3A5F]">Leads convertis :</strong> 5 ans à compter de la fin de la relation commerciale</li>
              <li><strong className="text-[#1E3A5F]">Données marketing :</strong> Jusqu&apos;à votre désinscription ou 3 ans sans activité</li>
              <li><strong className="text-[#1E3A5F]">Données techniques (logs) :</strong> 13 mois</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">9. Vos droits (RGPD)</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#64748B]">
              <li><strong className="text-[#1E3A5F]">Droit d&apos;accès :</strong> Obtenir une copie de vos données personnelles</li>
              <li><strong className="text-[#1E3A5F]">Droit de rectification :</strong> Corriger vos données inexactes ou incomplètes</li>
              <li><strong className="text-[#1E3A5F]">Droit à l&apos;effacement :</strong> Supprimer vos données dans certaines conditions</li>
              <li><strong className="text-[#1E3A5F]">Droit d&apos;opposition :</strong> Vous opposer au traitement de vos données</li>
              <li><strong className="text-[#1E3A5F]">Droit à la limitation :</strong> Limiter le traitement de vos données</li>
              <li><strong className="text-[#1E3A5F]">Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
              <li><strong className="text-[#1E3A5F]">Droit de retirer votre consentement :</strong> À tout moment, sans affecter la licéité du traitement antérieur</li>
            </ul>
            <p className="text-[#64748B] leading-relaxed mt-4">
              Pour exercer vos droits, contactez-nous à :{' '}
              <a href="mailto:baptiste@bpcorp.eu" className="text-[#00B8A9] font-semibold hover:underline">
                baptiste@bpcorp.eu
              </a>
            </p>
            <p className="text-[#64748B] leading-relaxed mt-4">
              Vous disposez également du droit d&apos;introduire une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) :{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#00B8A9] hover:underline">
                www.cnil.fr
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">10. Cookies</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Nous utilisons des cookies pour :
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#64748B]">
              <li><strong className="text-[#1E3A5F]">Cookies essentiels :</strong> Fonctionnement du site (pas de consentement requis)</li>
              <li><strong className="text-[#1E3A5F]">Cookies analytiques :</strong> Google Analytics (consentement requis)</li>
              <li><strong className="text-[#1E3A5F]">Cookies publicitaires :</strong> Meta Pixel (consentement requis)</li>
            </ul>
            <p className="text-[#64748B] leading-relaxed mt-4">
              Vous pouvez gérer vos préférences de cookies via le bandeau qui s&apos;affiche lors de votre première visite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">11. Sécurité</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre la perte, l&apos;utilisation abusive, l&apos;accès non autorisé, la divulgation, l&apos;altération ou la destruction :
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#64748B]">
              <li>Chiffrement SSL/TLS</li>
              <li>Accès restreint aux données</li>
              <li>Sauvegardes régulières</li>
              <li>Surveillance des accès</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">12. Modifications</h2>
            <p className="text-[#64748B] leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. La date de dernière mise à jour est indiquée en haut de cette page. Nous vous encourageons à consulter régulièrement cette page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">13. Contact</h2>
            <p className="text-[#64748B] leading-relaxed mb-3">
              Pour toute question relative à cette politique ou au traitement de vos données personnelles :
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
